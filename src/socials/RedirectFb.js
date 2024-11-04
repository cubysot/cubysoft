import { useEffect } from 'react';

const RedirectFb = () => {
    useEffect(() => {
        window.location.href = 'https://www.facebook.com/cubysof.uk';
    }, []);

    return null;
};

export default RedirectFb;
