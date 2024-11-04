import { useEffect } from 'react';

// Mensajes estilizados en la consola
console.log('%c ¡Atención!', 'color: #2b89f7; font-weight: bold; font-size: 58px;');
console.log('%cSi alguien te ha solicitado copiar y pegar algo aquí, es muy probable que te estén engañando.', 'color: #222; font-weight: normal; font-size: 18px;');
console.log('%cPegar algo en esta consola puede permitir que atacantes accedan a tu información del computador.', 'color: red; font-weight: normal; font-size: 18px;');
console.log('%cA menos que sepas exactamente lo que haces, te recomendamos que cierres esta ventana y te mantengas seguro.', 'color: #222; font-weight: normal; font-size: 18px;');
console.log('%cSi estás seguro de lo que haces, considera unirte a nosotros: https://www.cubysoft.uk/jobs', 'color: #222; font-weight: normal; font-size: 18px;');
console.log('%cAtte: soporte de cubysoft', 'color: #222; font-weight: normal; font-size: 18px;');
console.log('%cPosdata: Diseño original: Discord', 'color: #222; font-weight: normal; font-size: 6px;');

const ConsoleMsg = () => {
    useEffect(() => {
        const checkDevTools = setInterval(() => {
            // const devToolsOpen = /./;
            const threshold = 160; // Ancho mínimo para la consola

            if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
                // Redirigir a la página externa
                window.location.href = 'https://jobs.cubysoft.uk/';
            }
        }, 1000);

        return () => {
            clearInterval(checkDevTools);
        };
    }, []);

    return null; // No se renderiza nada en el HTML
};

export default ConsoleMsg;
