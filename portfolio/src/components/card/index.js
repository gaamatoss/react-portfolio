import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Button, Icon } from 'rsuite';
import './style.scss';


const cartao = () =>{
    return (
        <div className="card">
            <img className="picme" alt="Me" src="../assets/me.png"/>
            <h2>Gabriel Matos</h2>
            <h4>Web Developer</h4>
            <h4>gaabrielmatoss@hotmail.com</h4>
            <div className="container">
                <Button size="md" color="cyan"><Icon icon="star"/> About Me</Button>
                <Button size="md" appearance="ghost"><Icon icon="github"/> <a href="https://github.com/gaamatoss">Github</a></Button>
            </div>
        </div>
    )
};

export default cartao;