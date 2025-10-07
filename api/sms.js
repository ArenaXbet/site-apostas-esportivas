// api/sms.js
import { enviarSMS } from '../enviarSMS.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ sucesso: false, erro: 'Método não permitido' });
  }

  const { telefone, mensagem } = req.body;

  if (!telefone || !mensagem) {
    return res.status(400).json({ sucesso: false, erro: 'Telefone e mensagem são obrigatórios' });
  }

  try {
    await enviarSMS(telefone, mensagem);
    res.status(200).json({ sucesso: true, mensagem: 'SMS enviado com sucesso!' });
  } catch (erro) {
    console.error('Erro ao enviar SMS:', erro);
    res.status(500).json({ sucesso: false, erro: 'Falha ao enviar o SMS' });
  }
}
