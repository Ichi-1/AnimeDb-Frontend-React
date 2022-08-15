import React from 'react'
import styles from './Filters.module.css'

export const FilterHeader = ({title}) => {
  return (
    <div className={styles.filterHeader}>{title}</div>
  )
}
