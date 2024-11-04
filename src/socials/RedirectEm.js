import { useEffect } from 'react';

const RedirectEm = () => {
    useEffect(() => {
        window.location.href = 'mailto:hola@cubysoft.uk';
    }, []);

    return null;
};

export default RedirectEm;
