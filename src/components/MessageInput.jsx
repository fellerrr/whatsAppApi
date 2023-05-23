import React, { useState } from 'react';

const MessageInput = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Передаем текстовое сообщение в родительский компонент
    onMessageSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 fixed bottom-0 right-0 w-4/5 h-100
    bg-gray-800 flex items-center gap-10">
      <div className="w-full">
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="shadow bg-gray-600 appearance-none border-slate-900 rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder='Введите сообщение'
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Отправить
      </button>
    </form>
  );
};

export default MessageInput;