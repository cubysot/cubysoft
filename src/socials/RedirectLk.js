import { useEffect } from 'react';

const RedirectLk = () => {
    useEffect(() => {
        window.location.href = 'https://www.linkedin.com/company/cubysoft';
    }, []);

    return null;
};

export default RedirectLk;
