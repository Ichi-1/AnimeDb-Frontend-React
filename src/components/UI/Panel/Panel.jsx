import React from 'react'
import styles from './Panel.module.css'

export const Panel = ({title}) => {
  return (
    <div className={styles.filterHeader}>{title}</div>
  )
}
