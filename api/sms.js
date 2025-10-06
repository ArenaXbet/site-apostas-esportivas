api/sms.js
import { enviarSMS } from '../enviarSMS.js';

export default async function handler(req, res) {
  try {
    await enviarSMS('+5511988805285', 'Mensagem de teste do ArenaXbet');
    res.status(200).json({ sucesso: true, mensagem: 'SMS enviado!' });
  } catch (erro) {
    console.error('Erro:', erro);
    res.status(500).json({ sucesso: false, erro });
  }
}
