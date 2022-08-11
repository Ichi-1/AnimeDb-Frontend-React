import { useEffect, useRef } from "react"


export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        let func = (entries, observer) => {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }

        observer.current = new IntersectionObserver(func);
        observer.current.observe(ref.current)
    }, [isLoading])
}