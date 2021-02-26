import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {
  const [numeroAleaorio, setNumeroAleatorio] = useState(1);

  const gerarNumero = () => {
    const novoNumero = Math.round(Math.random() * (100 - 1) + 1);
    setNumeroAleatorio(novoNumero)
  }

  return (
    <div className="conteudo-centralizado">
      <h3>Número aleatório:</h3>
      <h1>{numeroAleaorio}</h1>

      <div className='area-botao'>
        <label>
          Click no botão abaixo para gerar um número aleatório:
          </label>

        <button onClick={gerarNumero}>
          Gerar número
          </button>
      </div>
    </div>
  );
}

