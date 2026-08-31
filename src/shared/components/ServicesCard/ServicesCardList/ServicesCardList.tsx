import { FC, PropsWithChildren } from 'react'

import styles from './ServicesCardList.module.css'

const ServicesCardList: FC<PropsWithChildren> = ({ children }) => (
  <ul className={styles['services-summary-list']}>{children}</ul>
)

export default ServicesCardList
