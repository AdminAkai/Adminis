import { FC } from 'react'

import styles from './ServicesCardSubheader.module.css'

const ServicesCardSubheader: FC = () => (
  <header className={styles['services-subheader']}>
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

export default ServicesCardSubheader
