type GridPoint = { x: number; y: number }
type Route = GridPoint & {
  nx: number
  ny: number
  tx: number
  ty: number
  horizontalFirst: boolean
  progress: number
  speed: number
  trail: GridPoint[]
  color: 'blue' | 'cyan' | 'fg'
}
type Flash = GridPoint & { life: number; color: Route['color'] }
type MotionElements = {
  scene: HTMLDivElement
  avatar: HTMLDivElement
  tilt: HTMLDivElement
  field: HTMLCanvasElement
  onPausedChange: (paused: boolean) => void
}

export function startHeroMotion({
  scene,
  avatar,
  tilt,
  field,
  onPausedChange,
}: MotionElements) {
  const root = document.documentElement
  const renderingContext = field.getContext('2d')
  if (!renderingContext) return null
  const context = renderingContext

  const motionQuery = matchMedia('(prefers-reduced-motion: reduce)')
  const cell = 28
  const colors = { fg: '', dot: '', blue: '', cyan: '' }
  const gaze = { x: 0, y: 0, targetX: 0, targetY: 0 }
  let routes: Route[] = []
  let flashes: Flash[] = []
  let columns = 2
  let rows = 2
  let width = 0
  let height = 0
  let paused = motionQuery.matches
  let visible = true
  let request = 0
  let last = 0

  const randomCell = (count: number) => Math.floor(Math.random() * count)
  const pixel = (position: number) => (position + 0.5) * cell
  const clamp = (value: number) => Math.max(-1, Math.min(1, value))

  function readColors() {
    const style = getComputedStyle(scene)
    for (const key of ['fg', 'dot', 'blue', 'cyan'] as const) {
      colors[key] = style.getPropertyValue(`--${key}`).trim()
    }
  }

  function retarget(route: Route) {
    route.tx = randomCell(columns)
    route.ty = randomCell(rows)
    route.horizontalFirst = Math.random() < 0.5
  }

  // The lab's V5 field: signals take right-angle routes between grid cells.
  function step(route: Route) {
    route.x = route.nx
    route.y = route.ny
    route.trail.push({ x: route.x, y: route.y })
    if (route.trail.length > 22) route.trail.shift()
    if (route.x === route.tx && route.y === route.ty) {
      flashes.push({ x: route.x, y: route.y, life: 1, color: route.color })
      retarget(route)
    }
    const dx = Math.sign(route.tx - route.x)
    const dy = Math.sign(route.ty - route.y)
    if (dx && (route.horizontalFirst || !dy)) route.nx = route.x + dx
    else if (dy) route.ny = route.y + dy
  }

  function advance(delta: number) {
    for (const route of routes) {
      route.progress += delta * route.speed
      while (route.progress >= 1) {
        route.progress -= 1
        step(route)
      }
    }
    for (const flash of flashes) flash.life -= delta * 0.9
    flashes = flashes.filter((flash) => flash.life > 0)
  }

  function draw() {
    context.clearRect(0, 0, width, height)
    context.fillStyle = colors.dot
    context.globalAlpha = 0.3
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++)
        context.fillRect(pixel(x) - 0.8, pixel(y) - 0.8, 1.6, 1.6)
    }
    context.lineWidth = 1.2
    for (const route of routes) {
      const headX = pixel(route.x + (route.nx - route.x) * route.progress)
      const headY = pixel(route.y + (route.ny - route.y) * route.progress)
      context.fillStyle = context.strokeStyle = colors[route.color]
      context.globalAlpha = 0.5
      context.strokeRect(pixel(route.tx) - 5, pixel(route.ty) - 5, 10, 10)
      route.trail.forEach((point, index) => {
        const next = route.trail[index + 1]
        context.globalAlpha = ((index + 1) / route.trail.length) * 0.55
        context.beginPath()
        context.moveTo(pixel(point.x), pixel(point.y))
        context.lineTo(
          next ? pixel(next.x) : headX,
          next ? pixel(next.y) : headY
        )
        context.stroke()
      })
      context.globalAlpha = 0.9
      context.fillRect(headX - 3.5, headY - 3.5, 7, 7)
    }
    for (const flash of flashes) {
      const size = 10 + (1 - flash.life) * 20
      context.strokeStyle = colors[flash.color]
      context.globalAlpha = flash.life * 0.65
      context.strokeRect(
        pixel(flash.x) - size / 2,
        pixel(flash.y) - size / 2,
        size,
        size
      )
    }
    context.globalAlpha = 1
  }

  function measure() {
    const rect = scene.getBoundingClientRect()
    const ratio = Math.min(devicePixelRatio || 1, 2)
    width = rect.width
    height = rect.height
    field.width = Math.round(width * ratio)
    field.height = Math.round(height * ratio)
    context.setTransform(ratio, 0, 0, ratio, 0, 0)
    columns = Math.max(2, Math.floor(width / cell))
    rows = Math.max(2, Math.floor(height / cell))
    routes = Array.from({ length: width < 620 ? 4 : 6 }, (_, index) => {
      const x = randomCell(columns),
        y = randomCell(rows)
      const route: Route = {
        x,
        y,
        nx: x,
        ny: y,
        tx: 0,
        ty: 0,
        horizontalFirst: false,
        progress: 0,
        speed: 3 + index * 0.35,
        trail: [],
        color: (['blue', 'cyan', 'fg'] as const)[index % 3],
      }
      retarget(route)
      return route
    })
    for (let i = 0; i < 35; i++) advance(0.2)
    flashes = []
    draw()
  }

  function updateGaze(delta: number) {
    const amount = 1 - Math.exp(-delta * 9)
    gaze.x += (gaze.targetX - gaze.x) * amount
    gaze.y += (gaze.targetY - gaze.y) * amount
    tilt.style.setProperty('--tilt-x', `${gaze.x * 13}deg`)
    tilt.style.setProperty('--tilt-y', `${gaze.y * -10}deg`)
    tilt.style.setProperty('--shift-x', `${gaze.x * 8}px`)
    tilt.style.setProperty('--shift-y', `${gaze.y * 5}px`)
    tilt.style.setProperty('--eye-x', `${gaze.x * 4}px`)
    tilt.style.setProperty('--eye-y', `${gaze.y * 2}px`)
  }

  function frame(now: number) {
    request = 0
    const delta = Math.min(0.05, last ? (now - last) / 1000 : 0)
    last = now
    advance(delta)
    updateGaze(delta)
    draw()
    if (!paused && visible && !document.hidden)
      request = requestAnimationFrame(frame)
  }

  function resetGaze() {
    gaze.targetX = 0
    gaze.targetY = 0
  }

  function syncMotion() {
    cancelAnimationFrame(request)
    request = 0
    last = 0
    onPausedChange(paused)
    if (paused) {
      resetGaze()
      gaze.x = 0
      gaze.y = 0
      updateGaze(0)
    }
    if (!paused && visible && !document.hidden)
      request = requestAnimationFrame(frame)
    else draw()
  }

  function followPointer(event: PointerEvent) {
    if (paused || event.pointerType === 'touch') return
    const rect = avatar.getBoundingClientRect()
    gaze.targetX = clamp((event.clientX - rect.left - rect.width / 2) / 360)
    gaze.targetY = clamp((event.clientY - rect.top - rect.height / 2) / 280)
  }
  function preferenceChanged(event: MediaQueryListEvent) {
    paused = event.matches
    syncMotion()
  }
  const themeObserver = new MutationObserver(() => {
    readColors()
    draw()
  })
  const visibilityObserver = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting
    syncMotion()
  })
  const resizeObserver = new ResizeObserver(measure)
  document.addEventListener('pointermove', followPointer, { passive: true })
  root.addEventListener('pointerleave', resetGaze)
  window.addEventListener('blur', resetGaze)
  motionQuery.addEventListener('change', preferenceChanged)
  document.addEventListener('visibilitychange', syncMotion)
  themeObserver.observe(root, { attributes: true, attributeFilter: ['class'] })
  visibilityObserver.observe(scene)
  resizeObserver.observe(scene)
  readColors()
  measure()
  syncMotion()

  return {
    toggle() {
      paused = !paused
      syncMotion()
    },
    destroy() {
      cancelAnimationFrame(request)
      themeObserver.disconnect()
      visibilityObserver.disconnect()
      resizeObserver.disconnect()
      document.removeEventListener('pointermove', followPointer)
      root.removeEventListener('pointerleave', resetGaze)
      window.removeEventListener('blur', resetGaze)
      motionQuery.removeEventListener('change', preferenceChanged)
      document.removeEventListener('visibilitychange', syncMotion)
    },
  }
}
