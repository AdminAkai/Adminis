import { FC, PropsWithChildren } from 'react'

import styles from './ServicesCardSection.module.css'

const ServicesCardSection: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles['services-card-section']}>{children}</div>
)

export default ServicesCardSection
