const path = require('path');
const axios = require('axios');
const aiRouter = require('express').Router();

process.env.NODE_EXTRA_CA_CERTS = path.resolve(__dirname, '..', '..', 'crt');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function giga(message) {
  const data = {
    model: 'GigaChat',
    messages: [
      {
        role: 'user',
        content: message,
      },
    ],
    n: 1,
    stream: false,
    max_tokens: 512,
    repetition_penalty: 1,
    update_interval: 0,
  };
  const token =
    'eyJjdHkiOiJqd3QiLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.SaFGqd4h4ONSJq42JjnCBFe-hQpyrEML8eBBjErZLrCzACRAOpc_XUmNF3haRvlc0csYVuYbIn0jrijYhWpvpFePlggh-ZAvpTfCx-m4aRWTbT-bhnS_3ALzorb9sI3A4iT9Aqmxl1mN__WIpSyIJWolZjafzY7PZaRpFeP5dAgUFhuVk_VWanjwT-L16EiLYapWm8POuW101Fzu9lzNz6FDv5O09WcRTzsT7yCyVyCW2tFhP5zRfObzaOdRQ-dyXCuOofgEMFxhkL3xmVGUiNh0ynuZe0xsN_cUtuI9SHo0x3kF-puwtHnVQDWrdbay0bZ27YVOTfFVTjJl1QscFA.7FpZ3XmNUDqrpcDh1Bvm_A.gWELenr0HQXwQA2xivJvNgqORTDDtw4_MdDIwiPDa6tYlsEnJqW1uMUKodS82WTmNKv0iae2PZiBYZInR0vQAz4Caog6UzoMCwvFasaQ8QusqN6V7AtwTM8Aqpk0R9qF8-DdqdFWVxIbU40v851BpZwqHpQLv2DInfaZVHpGo7Fkpvu_vk2HpE_YCrh641HwOmJa3y82GaMK-8pjKwzncidglN7b8q3BS1U0PoyCiKAnT_tRL0Mk1MTDyWUN7I2ZPQ3yUHlwAnj-V12Dfq3xJUNCUMk1nzgOZSer47HVt-3Hlhlc4hk--T6PaU4v99f3AaX3Pxeyl6kutJiFW-1Cmurr_9ed6nmCk2MjfixvgRjU0JCP5T296F-lqf-t_B59ypt3nRqrCKv5cl84cFl0LAItlsR8iUb272NQ8CccLb46CIqqUYHUi3X32tNN238lBBQReO_P8NSteaG7HcRtakN-HTqNGCrcbWmCIlW6_6vq8_05qWS28Oofp1GWBqG4TZnuyvJZFfZioNSWs0uXnMNpKJ1XT855p4njbPtAGCgiJ83ahOm9DNaQGXePDPgO6tMVXnh1s2WDN6s9lk3fm0TEUGmloHv5lttrr-GmSHosnGFIVPKnf7ixXk5okjNSV_oykRzi5TuM4fjWG0e1qJCTrHcXpKu0wqt-NrY8o_QlXWMOoO97UMIQ1eyu9n097ZO6vVfCJ6bU1fZP454cqmHSB0C1swzV2okxCJFQzQ8.i7Ia-Nf-kKZH_O_tcVmvKg0Ld5SBqMW0nn1ejX0jNZQ'; // Замените на ваш действующий токен
  const response = await axios.post(
    'https://gigachat.devices.sberbank.ru/api/v1//chat/completions', // API URL для GigaChat
    data, // Отправляем сообщение
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
  return response.data.choices[0].message.content;
}

aiRouter.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await giga(message);
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = aiRouter;
