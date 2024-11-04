import { useEffect } from 'react';

const RedirectDc = () => {
    useEffect(() => {
        window.location.href = 'https://www.discord.gg/cubysoft';
    }, []);

    return null;
};

export default RedirectDc;
