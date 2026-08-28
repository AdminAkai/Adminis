import { FC, PropsWithChildren } from 'react'

import styles from './AbilitiesCardList.module.css'

const AbilitiesCardList: FC<PropsWithChildren> = ({ children }) => (
  <ul className={styles['abilities-summary-list']}>{children}</ul>
)

export default AbilitiesCardList
