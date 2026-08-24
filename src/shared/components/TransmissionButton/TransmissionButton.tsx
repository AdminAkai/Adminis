import { CSSProperties, FC, useMemo, useState } from 'react'

import ScrambleText from '../ScrambleText'
import BroadcastIcon from '../IconRenderer/icons/BroadcastIcon'

import { useAppSelector } from 'src/shared/redux/store'
import { selectBroken } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './TransmissionButton.module.css'

type TransmissionButtonProps = {
  hidden?: boolean
  loading?: boolean
  style?: CSSProperties
  errors?: boolean
}

const TransmissionButton: FC<TransmissionButtonProps> = ({
  hidden,
  loading,
  errors,
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

  const TransmissionButtonText = useMemo(() => {
    if (errors) return 'RETRY'
    return 'TRANSMIT'
  }, [loading, errors])

  return (
    <button
      type='submit'
      style={{ display: hidden ? 'none' : 'inline-flex', ...style }}
      disabled={loading}
      className={`${styles['transmission-button']} ${errors && styles['transmission-button-errors']}`}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
    >
      <ScrambleText
        text={TransmissionButtonText}
        startOnLoad
        scramble={scramble}
        className={styles['signal-text']}
        infinite={broken || loading}
      />
      <BroadcastIcon />
    </button>
  )
}

export default TransmissionButton
