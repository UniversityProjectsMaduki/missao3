import { NextApiRequest, NextApiResponse } from 'next'
import { ControleLivro } from '../../../../classes/controle/ControleLivros'

export const controleLivro = new ControleLivro()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const livros = controleLivro.obterLivros()
      res.status(200).json(livros)
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' })
    }
  } else if (req.method === 'POST') {
    try {
      const novoLivro = req.body
      controleLivro.incluir(novoLivro)
      res.status(200).json({ message: 'Livro incluído com sucesso' })
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
