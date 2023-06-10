import { NextApiRequest, NextApiResponse } from 'next'
import { controleEditora } from '.'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const codEditora = Number(req.query.codEditora)
      const nomeEditora = controleEditora.getNomeEditora(codEditora)
      res.status(200).json({ nome: nomeEditora })
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
