import {  useState } from 'react';


const RecipientPhoneNumberInput = ({ onPhoneNumberSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Передаем номер телефона в родительский компонент
    onPhoneNumberSubmit(phoneNumber);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col justify-center items-center">
      <div className="mb-4 w-full">
        <label htmlFor="phoneNumber" className="block text-gray-300 font-bold mb-4">
          Введите номер телефона получателя:<br/>
          (в формате 7 999 888 88 88)
        </label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="shadow bg-gray-600 appearance-none border-slate-900
          rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
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

export default RecipientPhoneNumberInput;