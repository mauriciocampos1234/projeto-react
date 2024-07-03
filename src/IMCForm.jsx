// src/IMCForm.js
import React, { useState } from 'react';

function IMCForm() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = (e) => {
    e.preventDefault();

    const alturaEmMetros = altura / 100;
    const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);

    setIMC(imcCalculado);
    classificarIMC(imcCalculado);
    };

    const classificarIMC = (imc) => {
        let classificacao = '';

        if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau I';
        } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
        }

        setClassificacao(classificacao);
    };

    return (
        <div>
        <form onSubmit={calcularIMC}>
            <div>
            <label htmlFor="altura">Altura (cm): </label>
            <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
            />
            </div>
            <div>
            <label htmlFor="peso">Peso (kg): </label>
            <input
                type="number"
                id="peso"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
            />
            </div>
            <button type="submit">Calcular IMC</button>
        </form>

        {imc && (
            <div>
            <h2>Seu IMC é: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
            </div>
        )}
        </div>
    );
}

export default IMCForm;
