import { FC } from 'react'

import { WindowControlIcon } from '../../IconRenderer/icons/WindowControlIcon'

import styles from './AbilitiesCardHeader.module.css'

type AbilitiesCardHeaderProps = {
  title: string
}

const AbilitiesCardHeader: FC<AbilitiesCardHeaderProps> = ({ title }) => (
  <header className={styles['abilities-header']}>
    <p>{title}</p>
    <div className={styles['abilities-control-section']}>
      <div className={styles['abilities-control']}>
        <WindowControlIcon variant='minimize' size={16} />
      </div>
      <div className={styles['abilities-control']}>
        <WindowControlIcon variant='maximize' size={16} />
      </div>
      <div className={styles['abilities-control']}>
        <WindowControlIcon variant='close' size={16} />
      </div>
    </div>
  </header>
)

export default AbilitiesCardHeader
