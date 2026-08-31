import { FC, PropsWithChildren } from 'react'

import styles from './ServicesCardListItem.module.css'

const ServicesCardListItem: FC<PropsWithChildren> = ({ children }) => (
  <li className={styles['services-summary-list-item']}>{children}</li>
)
export default ServicesCardListItem
