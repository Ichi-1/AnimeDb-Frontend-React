import React, { useState } from "react";
import styles from './ReadMore.module.css'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 500) : text}
            <span onClick={toggleReadMore} className={styles.ReadOrHide}>
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

export const ReadMoreButton = ({ text }) => {
    return (
        <ReadMore>
            {text}
        </ReadMore>
    );
};

