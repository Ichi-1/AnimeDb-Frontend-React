import { useEffect, useState } from "react";

export const useDebounce = (value, timeout, callback) => {

    const [timer, setTimer] = useState(null);
    
    const timerClear = () => {
        if (timer) {
            clearTimeout(timer)
        }

    }

    useEffect(() => {
        timerClear();

        if (value && callback) {
            const newTimer = setTimeout(callback, timeout);
            setTimer(newTimer);
        }

    }, [value])
}