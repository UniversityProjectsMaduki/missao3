import React, { useState, useEffect } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';


const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
  const { titulo, resumo, codEditora, autores } = livro;
  const nomeEditora = controleEditora.getNomeEditora(codEditora);

  return (
    <tr>
      <td>
        {titulo}
        <br />
        <button
          style={{ backgroundColor: '#dc3545', color: '#fff' }}
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
      <td>{resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};



const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {livros.map(livro => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};



export default LivroLista;
