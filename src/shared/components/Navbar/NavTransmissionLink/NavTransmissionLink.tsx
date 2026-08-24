import { CSSProperties, FC, useState } from 'react'
import { Link } from 'react-router-dom'

import ScrambleText from 'src/shared/components/ScrambleText'
import BroadcastIcon from 'src/shared/components/IconRenderer/icons/BroadcastIcon'

import { useAppSelector } from 'src/shared/redux/store'
import { selectBroken } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './NavTransmissionLink.module.css'

type NavTransmissionLinkProps = {
  hidden?: boolean
  disabled?: boolean
  style?: CSSProperties
  errors?: boolean
}

const NavTransmissionLink: FC<NavTransmissionLinkProps> = ({
  hidden,
  style,
}) => {
  const broken = useAppSelector(selectBroken)
  const [scramble, setScramble] = useState<boolean>(false)

  const startScramble = () => {
    setScramble(true)
  }

  const stopScramble = () => {
    setScramble(false)
  }

  return (
    <Link
      style={{ display: hidden ? 'none' : 'inline-flex', ...style }}
      to='/transmission'
      className={`${styles['transmission-link']} ${broken && styles['transmission-link-broken']}`}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
    >
      <ScrambleText
        text='SIGNALIS'
        startOnLoad
        scramble={scramble}
        className={styles['signal-text']}
        infinite={broken}
      />
      <BroadcastIcon />
    </Link>
  )
}

export default NavTransmissionLink
