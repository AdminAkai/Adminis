import { FC } from 'react'

import EpisodeOne from '../EpisodeOne/EpisodeOne'
import EpisodeHate from '../EpisodeHate/EpisodeHate'

import styles from './Landing.module.css'
import EpisodeTwo from '../EpisodeTwo'

const Landing: FC = () => (
  <div className={styles['landing-container']}>
    <EpisodeOne />
    <EpisodeTwo />
    <EpisodeHate />
  </div>
)

export default Landing
