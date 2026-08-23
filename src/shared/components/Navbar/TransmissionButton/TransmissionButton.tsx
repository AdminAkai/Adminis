import { CSSProperties, FC, useState } from 'react'

import { Link } from 'react-router-dom'

import ScrambleText from '../../ScrambleText'
import BroadcastIcon from '../../IconRenderer/icons/BroadcastIcon'

import { useAppSelector } from 'src/shared/redux/store'
import { selectBroken } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './TransmissionButton.module.css'

type TransmissionButtonProps = {
  hidden?: boolean
  disabled?: boolean
  style?: CSSProperties
}

const TransmissionButton: FC<TransmissionButtonProps> = ({
  hidden,
  disabled,
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
      className={`${styles['transmission-button']} ${disabled && styles['transmission-button-disabled']}`}
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

export default TransmissionButton
