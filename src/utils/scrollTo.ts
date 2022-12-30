import { MouseEvent } from 'react'

const ScrollTo = (e: MouseEvent<HTMLElement>) => {
  e.preventDefault()
  const el = e.target as HTMLInputElement
  console.log(el)
  const target = el.getAttribute('href')
  if (!target) return
  const targetEl = document.querySelector(target) as HTMLElement
  if (!targetEl) return
  const targetElPos = targetEl.offsetTop
  window.scrollTo({
    top: targetElPos - 70,
    behavior: 'smooth',
  })
}

export default ScrollTo
