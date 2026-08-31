import { FC, useMemo } from 'react'

import { WindowControlIcon } from '../../IconRenderer/icons/WindowControlIcon'
import ScrambleText from '../../ScrambleText'

import useMediaQuery from 'src/shared/hooks/useMediaQuery'

import styles from './ServicesCardHeader.module.css'

type ServicesCardHeaderProps = {
  title: string
  isLast?: boolean
}

const ServicesCardHeader: FC<ServicesCardHeaderProps> = ({ title, isLast }) => {
  const isMobile = useMediaQuery('(max-width: 959px)')

  const controlIconSize = useMemo(() => (isMobile ? 12 : 16), [isMobile])

  return (
    <header className={styles['services-header']}>
      {isLast ? <ScrambleText text='see' infinite /> : <p>{title}</p>}
      <div className={styles['services-control-section']}>
        <div className={styles['services-control']}>
          <WindowControlIcon variant='minimize' size={controlIconSize} />
        </div>
        <div className={styles['services-control']}>
          <WindowControlIcon variant='maximize' size={controlIconSize} />
        </div>
        <div className={styles['services-control']}>
          <WindowControlIcon variant='close' size={controlIconSize} />
        </div>
      </div>
    </header>
  )
}

export default ServicesCardHeader
