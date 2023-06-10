import { NextApiRequest, NextApiResponse } from 'next'
import { ControleEditora } from '../../../../classes/controle/ControleEditora'

export const controleEditora = new ControleEditora()

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const editoras = controleEditora.getEditoras()
      res.status(200).json(editoras)
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
