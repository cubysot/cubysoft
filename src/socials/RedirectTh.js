import { useEffect } from 'react';

const RedirectTh = () => {
    useEffect(() => {
        window.location.href = 'https://www.threads.net/@cubysoft.uk';
    }, []);

    return null;
};

export default RedirectTh;
