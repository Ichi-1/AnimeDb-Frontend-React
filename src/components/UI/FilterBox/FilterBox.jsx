import React from 'react'
import styles from './FilterBox.module.css'
import { MyCheckBox } from 'components/UI/CheckBox/CheckBox';



export const FilterBox = () => {
    return (
        <div>
            <div>
                <div className={styles.filterHeader}> Show Type </div>
                <div className={styles.filterCheckBoxes}>
                    <MyCheckBox size="small" label='TV Show' />
                    <div style={{ marginLeft: '30px' }}>
                        <MyCheckBox size="xs" label='Short' />
                        <MyCheckBox size="xs" label='Medium' />
                        <MyCheckBox size="xs" label='Long' />
                    </div>
                    <MyCheckBox size="small" label='Movie' />
                    <MyCheckBox size="small" label='OVA' />
                    <MyCheckBox size="small" label='ONA' />
                </div>
            </div>

            <div>
                <div className={styles.filterHeader}> Sort By </div>
                <div className={styles.filterCheckBoxes}>
                    <MyCheckBox size="small" label='Average Rating' />
                    <MyCheckBox size="small" label='Alphabetical Order' />
                    <MyCheckBox size="small" label='Release Year' />
                    <MyCheckBox size="small" label='Randomly' />
                    
                </div>
            </div>



        </div>
    )
}
