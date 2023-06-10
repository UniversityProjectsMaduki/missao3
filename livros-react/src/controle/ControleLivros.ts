import { Livro } from '../modelo/Livro';

let livros: Array<Livro> = [
  new Livro(1, 1, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', ['Bert Bates', 'Kathy Sierra']),
  new Livro(2, 2, 'Java, como Programar', 'Milhões de alunos e profissionais aprendem programação e desenvolvimento de software com os livros Deitel', ['Paul Deitel', 'Harvey Deitel']),
  new Livro(3, 3, 'Core Java for the Impatient', 'Readers familiar with Horstmanns original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries', ['Cay Horstmann'])
];

export class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    let maxCodigo = Math.max(...livros.map(livro => livro.codigo));
    livro.codigo = maxCodigo + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    let index = livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}
