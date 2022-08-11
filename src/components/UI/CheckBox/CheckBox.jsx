import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from './CheckBox.module.css'

export const MyCheckBox = ({label, size}) => {
    return (
        <FormGroup className={styles.CheckBox}>
            <FormControlLabel 
                control={<Checkbox size={size} />} 
                label={label} 
                style={{margin:0, padding:0}} 
            />
        </FormGroup>
    );
}