import { FC, useMemo } from 'react'

import { WindowControlIcon } from '../../IconRenderer/icons/WindowControlIcon'
import ScrambleText from '../../ScrambleText'

import useMediaQuery from 'src/shared/hooks/useMediaQuery'

import styles from './AbilitiesCardHeader.module.css'

type AbilitiesCardHeaderProps = {
  title: string
  isLast?: boolean
}

const AbilitiesCardHeader: FC<AbilitiesCardHeaderProps> = ({
  title,
  isLast,
}) => {
  const isMobile = useMediaQuery('(max-width: 959px)')

  const controlIconSize = useMemo(() => (isMobile ? 12 : 16), [isMobile])

  return (
    <header className={styles['abilities-header']}>
      {isLast ? <ScrambleText text='see' infinite /> : <p>{title}</p>}
      <div className={styles['abilities-control-section']}>
        <div className={styles['abilities-control']}>
          <WindowControlIcon variant='minimize' size={controlIconSize} />
        </div>
        <div className={styles['abilities-control']}>
          <WindowControlIcon variant='maximize' size={controlIconSize} />
        </div>
        <div className={styles['abilities-control']}>
          <WindowControlIcon variant='close' size={controlIconSize} />
        </div>
      </div>
    </header>
  )
}

export default AbilitiesCardHeader
