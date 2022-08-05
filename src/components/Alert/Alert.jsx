import React, { useState } from 'react';
import classes from './Alert.module.css'
import Alert from 'react-bootstrap/Alert';

export const MyAlert = ({ variant, text }) => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <>
                <Alert 
                    className={classes.close}
                    style={{ marginTop: '-92px' }} 
                    key={variant} 
                    variant={variant}
                    onClose={() => setShow(false)} 
                    dismissible
                >
                    {text}
                </Alert>
            </>
        );
    }
    
}

