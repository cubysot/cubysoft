import React from 'react';
import './Marquee.css'; // Asegúrate de crear este archivo para estilos

import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFortinet } from "react-icons/si";
import { SiMcafee } from "react-icons/si";
import { SiKaspersky } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { SiAuth0 } from "react-icons/si";



const companies = [
    { id: 1, name: 'Azure', icon: <VscAzure />, color: '#0078D4' },
    { id: 2, name: 'Aws', icon: <FaAws />, color: '#FF9900' },
    { id: 3, name: 'Google', icon: <FcGoogle />, color: '' },
    { id: 4, name: 'Fortinet', icon: <SiFortinet />, color: '#EE3124' },
    { id: 5, name: 'Mcafee', icon: <SiMcafee />, color: '#C8102E' },
    { id: 6, name: 'Kaspersky', icon: <SiKaspersky />, color: '#006C67' },
    { id: 7, name: 'Oracle', icon: <SiOracle />, color: '#F80000' },
    { id: 8, name: 'Cloudflare', icon: <FaCloudflare />, color: '#F38020' },
    { id: 9, name: 'Github', icon: <FaGithub />, color: '#000000' },
    { id: 10, name: 'Gitlab', icon: <FaGitlab />, color: '#FC6D26' },
    { id: 11, name: 'Auth0', icon: <SiAuth0 />, color: '#000' },
];


const Marquee = () => {
    return (
        <div className="marquee">
            <div className="marquee-content">
                {companies.map(company => (
                    <div className="marquee-item" key={company.id} title={company.name}>
                        <span style={{ color: company.color }}>{company.icon}</span>
                    </div>
                ))}
                {companies.map(company => (
                    <div className="marquee-item" key={company.id + 100}>
                        <span style={{ color: company.color }}>{company.icon}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
