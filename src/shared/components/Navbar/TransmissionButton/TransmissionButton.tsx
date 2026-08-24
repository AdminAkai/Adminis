import { CSSProperties, FC, SubmitEventHandler, useMemo, useState } from 'react'

import ScrambleText from '../../ScrambleText'
import BroadcastIcon from '../../IconRenderer/icons/BroadcastIcon'

import { useAppSelector } from 'src/shared/redux/store'
import { selectBroken } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './TransmissionButton.module.css'

type TransmissionButtonProps = {
  hidden?: boolean
  disabled?: boolean
  style?: CSSProperties
  errors?: boolean
}

const TransmissionButton: FC<TransmissionButtonProps> = ({
  hidden,
  disabled,
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

  const TransmissionButtonText = useMemo(
    () => (errors ? 'RETRY' : 'TRANSMIT'),
    [errors]
  )

  return (
    <button
      type='submit'
      style={{ display: hidden ? 'none' : 'inline-flex', ...style }}
      disabled={disabled}
      className={`${styles['transmission-button']} ${errors && styles['transmission-button-errors']}`}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
    >
      <ScrambleText
        text={TransmissionButtonText}
        startOnLoad
        scramble={scramble}
        className={styles['signal-text']}
        infinite={broken || disabled}
      />
      <BroadcastIcon />
    </button>
  )
}

export default TransmissionButton
