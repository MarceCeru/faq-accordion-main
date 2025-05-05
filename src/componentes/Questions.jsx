import React, {useState} from 'react';
import './Questions.css';
import imageAdd from './images/icon-plus.svg';
import imageRemove from './images/icon-minus.svg';


export const Questions = ({ question, answer }) => {

const [mostrar, setMostrar] = useState(false);

const handleClick = () => {
    setMostrar(!mostrar);
};

const estiloBoton = {
    
    backgroundImage: mostrar ? `url(${imageRemove})` : `url(${imageAdd})`,
    backgoundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

    return (
        <div className="question">
            <div className="question__number">
                <h2>{question}</h2>
                <button onClick={handleClick} style={estiloBoton} className={mostrar ? 'boton-negativo' : 'button'}></button>
            </div>
            <p style={{display: mostrar? 'block' : 'none' }}>{answer}</p>
        </div>
    );
}