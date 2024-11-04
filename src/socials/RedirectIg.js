import { useEffect } from 'react';

const RedirectIg = () => {
    useEffect(() => {
        window.location.href = 'https://instagram.com/cubysoft.uk';
    }, []);

    return null;
};

export default RedirectIg;
