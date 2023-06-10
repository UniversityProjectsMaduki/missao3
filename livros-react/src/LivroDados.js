import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

function LivroDados() {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);

  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      codEditora,
      autores: autores.split('\n'),
    };
    controleLivro.incluir(livro);
    navigate('/');
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    width: '800px',
  };

  const inputStyle = {
    width: '100%',
  };

  return (
    <main style={formStyle}>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir} style={formStyle}>
        <div style={inputContainerStyle}>
          <label htmlFor="titulo">Título:</label>
          <input type="text" placeholder="Insira o título do livro" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} style={inputStyle} />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="resumo">Resumo:</label>
          <textarea placeholder="Insira o resumo do livro" id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} rows={3} style={inputStyle} />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="editora">Editora:</label>
          <select id="editora" value={codEditora} onChange={tratarCombo} style={inputStyle}>
            {controleEditora.getEditoras().map((editora) => (
              <option key={editora.codEditora} value={editora.codEditora}>
                {editora.nome}
              </option>
            ))}
          </select>
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="autores">Autores:</label>
          <textarea placeholder="Insira o(s) autor(es) do livro" id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} rows={3} style={inputStyle} />
        </div>

        <button style={{ backgroundColor: '#0d6efd', color: 'white' }} type="submit">Salvar dados</button>
      </form>
    </main>
  );
}

export default LivroDados;
