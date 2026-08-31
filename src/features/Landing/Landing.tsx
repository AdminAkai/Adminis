import { FC } from 'react'

import EpisodeOne from '../EpisodeOne/EpisodeOne'
import EpisodeTwo from '../EpisodeTwo'
import EpisodeHate from '../EpisodeHate/EpisodeHate'
import EpisodeThree from '../EpisodeThree'

import styles from './Landing.module.css'

const Landing: FC = () => (
  <div className={styles['landing-container']}>
    <EpisodeOne />
    <EpisodeTwo />
    <EpisodeThree />
    <EpisodeHate />
  </div>
)

export default Landing
