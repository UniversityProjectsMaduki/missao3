export class Livro {
  constructor(
    public codigo: number,
    public titulo: string,
    public resumo: string,
    public autores: string[],
    public codEditora: number
  ) {}
}
