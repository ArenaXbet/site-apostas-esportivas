import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function enviarSMS(para, mensagem) {
  try {
    const sms = await client.messages.create({
      body: mensagem,
      from: process.env.TWILIO_PHONE_NUMBER, // número Twilio (+15312245450)
      to: para // número de destino (ex: +5511988805285)
    });

    console.log('✅ SMS enviado com sucesso:', sms.sid);
  } catch (erro) {
    console.error('❌ Erro ao enviar SMS:', erro);
  }
}
