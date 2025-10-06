enviarSMS.js
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function enviarSMS(to, mensagem) {
  try {
    const sms = await client.messages.create({
      body: mensagem,
      from: '+15312245450', // <-- seu número Twilio
      to,
    });
    console.log('SMS enviado com sucesso:', sms.sid);
  } catch (erro) {
    console.error('Erro ao enviar SMS:', erro);
  }
  }
