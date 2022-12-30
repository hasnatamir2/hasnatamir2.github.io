import { FC, useEffect } from 'react'
import TagCloud from 'TagCloud'
// import '../styles/TextShpere.css'

const TextShpere: FC<{
  skills: string[]
}> = ({ skills }) => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = '.tagcloud'

      const options = {
        radius: 350,
        keep: true,
      }

      TagCloud(container, skills, options)
    }
  }, [skills])

  return (
    <div className="text-shpere">
      <span className="tagcloud"></span>
    </div>
  )
}

export default TextShpere
