import { useEffect } from 'react';

const RedirectWs = () => {
    useEffect(() => {
        window.location.href = 'https://wa.me/+573158602911';
    }, []);

    return null;
};

export default RedirectWs;
