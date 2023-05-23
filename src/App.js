import React, {useEffect, useState} from 'react';

import MessageInput from './components/MessageInput.jsx';
import TokenInput from "./components/TokenInput.jsx";
import PhoneInput from "./components/PhoneInput.jsx";
import Chat from "./components/Chat.jsx";
import {getHistory, sendMessage, startScan} from "./utils/requests.js";
import SideBar from "./components/SideBar";
// import {sendMessage} from "./utils/requests.js";


const App = () => {

  const [credentials, setCredentials] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleCredentialsSubmit = (credentials) => {
    setCredentials(credentials);
  };

  const handlePhoneNumberSubmit = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
    getHistory(credentials, phoneNumber).then((history)=>{

      try {
        const reversedMessages = history.map((item) => ({
          sender: item.senderName ? item.senderName : 'me',
          text: item.textMessage,
        })).reverse();

        setMessages((prevMessages) => [
          ...prevMessages,
          ...reversedMessages,
        ]);
      } catch (error) {
        console.log(error);
      }

    })

  };

  const handleMessageSubmit = (message) => {
    // Отправляем сообщение через GREEN-API
    // Обновляем состояние сообщений в чате
    setMessages([...messages, { sender: 'me', text: message }]);
    sendMessage(credentials, phoneNumber, message)
    console.log(credentials, phoneNumber, message)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      startScan(credentials).then((data) => {
        try{
          if (data) {
            const sender = data.body.senderData.senderName
            const message = data.body.messageData.textMessageData.textMessage
            setMessages([...messages, { sender: sender, text: message }]);

          }
        } catch (error) {
          console.error('Принимаю только сообщения');
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  // }, [idInstance, apiTokenInstance]);

  console.log(messages)

  return (
    <>
      {/*<h1 className="text-3xl font-bold p-4 text-gray-100 bg-gray-800 text-center">WhatsApp Chat</h1>*/}

    <div className="p-4 bg-gray-800 text-gray-100 h-screen flex items-center justify-start flex-col w-full">

      {!credentials && <p>Введите данные для доступа к сервису</p>}
      {credentials ? (
        <>
          {/*<h2 className="text-2xl font-bold mb-4">Logged in with GREEN-API</h2>*/}
          {phoneNumber ? (
            <>
              {/*<h3 className="text-xl font-bold mb-4">Chatting with: {phoneNumber}</h3>*/}
              <SideBar phoneNumber = {phoneNumber}/>
              <Chat messages={messages}/>
              <MessageInput onMessageSubmit={handleMessageSubmit} />
            </>
          ) : (
            <PhoneInput onPhoneNumberSubmit={handlePhoneNumberSubmit} />
          )}
        </>
      ) : (
        <TokenInput onCredentialsSubmit={handleCredentialsSubmit} />
      )}
    </div>
    </>
  );
};

export default App;
