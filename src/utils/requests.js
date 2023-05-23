import axios from 'axios';

export const sendMessage = async (credentials, phoneNumber, message) => {
  const { idInstance, apiTokenInstance } = credentials;
  const chatId = `${phoneNumber}@c.us`;
  const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

  try {
    const response = await axios.post(url, {
      chatId,
      message,
    });
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export const startScan = async  (credentials) => {
  if(credentials){
    const { idInstance, apiTokenInstance } = credentials;
    try {
      const result = await axios.get(
        `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`
      );
      if (result.data) {
        const data = result.data
        const receiptId = data.receiptId
        console.log('axios',data)
        console.log('receiptId',receiptId)
        await axios.delete(
          `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`)
        return data
      }
    } catch (error) {
      console.error(error);
    }
  }

}

export const getHistory = async (credentials,phoneNumber) => {
  const { idInstance, apiTokenInstance } = credentials;
  const chatId = `${phoneNumber}@c.us`;
  let count = 20
  const url = `https://api.green-api.com/waInstance${idInstance}/GetChatHistory/${apiTokenInstance}`;
  try {
    const result = await axios.post(url, {
      chatId,
      count
    });
    if (result.data) {
      const history = result.data
      console.log('history',history)

      return history
    }
  } catch (error) {
    console.error('Error', error);
  }

}


