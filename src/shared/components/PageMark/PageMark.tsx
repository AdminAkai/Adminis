import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import styles from './PageMark.module.css'

type PageMarkProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const PageMark: FC<PageMarkProps> = ({ children, ...rest }) => {
  return (
    <div className={styles.mark} {...rest}>
      {children}
    </div>
  )
}

export default PageMark
