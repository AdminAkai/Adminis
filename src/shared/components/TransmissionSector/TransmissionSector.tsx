import { FC, PropsWithChildren } from 'react'

import styles from './TransmissionSector.module.css'

const TransmissionSector: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles['transmission-sector']}>{children}</div>
)

export default TransmissionSector
