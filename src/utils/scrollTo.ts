const ScrollTo = (target: string) => {
  const targetEl = document.querySelector(target) as HTMLElement
  if (!targetEl) return
  const targetElPos = targetEl.offsetTop
  window.scrollTo({
    top: targetElPos - 70,
    behavior: 'smooth',
  })
}

export default ScrollTo