import React from 'react'
import styles from './Panel.module.css'

export const Panel = ({ title }) => {
    return (
        <div className={styles.Panel}>
            {title}
        </div>
    )
}


export const PanelWithLink = ({ title }) => {
    return (
        <div className={styles.Panel}>
            <div className={styles.PanelWithLink}>
                {title}
            </div>
        </div>
    )
}
