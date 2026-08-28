import { FC, PropsWithChildren } from 'react'

import styles from './AbilitiesCardSection.module.css'

const AbilitiesCardSection: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles['abilities-card-section']}>{children}</div>
)

export default AbilitiesCardSection
