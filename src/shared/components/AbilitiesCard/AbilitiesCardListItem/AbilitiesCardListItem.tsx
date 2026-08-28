import { FC, PropsWithChildren } from 'react'

import styles from './AbilitiesCardListItem.module.css'

const AbilitiesCardListItem: FC<PropsWithChildren> = ({ children }) => (
  <li className={styles['abilities-summary-list-item']}>{children}</li>
)
export default AbilitiesCardListItem
