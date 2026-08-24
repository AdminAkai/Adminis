import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import IconRenderer from 'src/shared/components/IconRenderer'
import Ticker from 'src/shared/components/Ticker'

import NavbarAdminis from './NavbarAdminis'
import NavLangSetting from './NavLangSetting'
import TransmissionButton from './TransmissionButton'

import styles from './navbar.module.css'

const Navbar: FC = () => {
  const { pathname } = useLocation()

  return (
    <nav className={styles.navbar}>
      <NavbarAdminis />
      <Ticker />
      <div className={styles['navbar-options']}>
        <NavLangSetting />
        <IconRenderer />
        <TransmissionButton
          text='SIGNALIS'
          hidden={pathname === '/transmission'}
        />
      </div>
    </nav>
  )
}

export default Navbar
