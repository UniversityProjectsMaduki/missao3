import { Editora } from '../modelo/Editora';

let editoras: Array<Editora> = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Person'),
  new Editora(3, 'Addison Wesley')
];

export class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | null {
    let editora = editoras.find(editora => editora.codEditora === codEditora);

    if (editora) {
      return editora.nome;
    } else {
      return null;
    }
  }
}
