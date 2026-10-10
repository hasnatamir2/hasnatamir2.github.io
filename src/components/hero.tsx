import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { PersonalInfo, Stats } from '../types/content'
import { urlFor } from '../sanity/lib/image'
import HeroScene from './hero-scene'
import styles from './hero.module.css'

export default function Hero({
  personalInfo,
  stats,
}: {
  personalInfo: PersonalInfo
  stats: Stats
}) {
  const content = personalInfo.hero
  const avatar = content?.avatar
  const artwork = avatar?.asset ? (
    <Image
      src={urlFor(avatar).width(640).auto('format').url()}
      alt={avatar.alt || ''}
      width={640}
      height={640}
      sizes='(max-width: 1150px) 225px, (min-width: 1500px) 298px, 272px'
      preload
      draggable={false}
    />
  ) : null

  return (
    <section id='home' aria-labelledby='hero-heading' className={styles.hero}>
      <HeroScene
        availability={content?.availability}
        pauseLabel={content?.pauseMotionLabel || 'Pause motion'}
        playLabel={content?.playMotionLabel || 'Play motion'}
        artwork={artwork}
      >
        <div className={styles.intro}>
          {content?.eyebrow ? (
            <p className={styles.eyebrow}>{content.eyebrow}</p>
          ) : null}
          <h1 id='hero-heading'>
            {content?.heading || personalInfo.pageTabline}
            {content?.headingContinuation ? (
              <>
                <br />
                <span>{content.headingContinuation}</span>
              </>
            ) : null}
          </h1>
          <p className={styles.description}>
            {content?.description || personalInfo.pageSubTitle1}
          </p>
        </div>
      </HeroScene>
      <div className={styles.actionBar}>
        <div className={styles.facts}>
          {stats?.yearsExperience ? (
            <span>
              <b>{stats.yearsExperience.replace(/\+$/, '')}+</b>{' '}
              {content?.experienceLabel || 'years building'}
            </span>
          ) : null}
          {stats?.projectsDelivered ? (
            <span>
              <b>{stats.projectsDelivered.replace(/\+$/, '')}+</b>{' '}
              {content?.projectsLabel || 'projects delivered'}
            </span>
          ) : null}
        </div>
        <div className={styles.actions}>
          {personalInfo.resume ? (
            <Link
              className={styles.button}
              href={personalInfo.resume}
              target='_blank'
              rel='noopener noreferrer'
            >
              {content?.resumeLabel || 'Resume'}
            </Link>
          ) : null}
          <Link
            className={`${styles.button} ${styles.primary}`}
            href='#contact'
          >
            {content?.contactLabel || 'Get in Touch'}
            <ArrowUpRight size={16} aria-hidden='true' />
          </Link>
        </div>
      </div>
    </section>
  )
}
