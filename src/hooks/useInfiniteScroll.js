import { useEffect } from "react";

const useInfiniteScroll = (callback, ref) => {
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) callback();
        });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [callback, ref]);
};

export default useInfiniteScroll;
