import { FC } from 'react'

import styles from './AbilitiesCardSubheader.module.css'

const AbilitiesCardSubheader: FC = () => (
  <header className={styles['abilities-subheader']}>
    <p>
      <span>F</span>ile
    </p>
    <p>
      <span>E</span>dit
    </p>
    <p>
      <span>S</span>earch
    </p>
    <p>
      <span>H</span>elp
    </p>
  </header>
)

export default AbilitiesCardSubheader
