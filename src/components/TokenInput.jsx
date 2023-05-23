import { useState } from 'react';


const GreenApiCredentialsInput = ({ onCredentialsSubmit }) => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCredentialsSubmit({ idInstance, apiTokenInstance });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-2/5 flex flex-col justify-center items-center">
      <div className="mb-4 w-full">
        <label htmlFor="idInstance" className="block text-gray-300 font-bold mb-2">
          ID Instance:
        </label>
        <input
          type="text"
          id="idInstance"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
          required
          className="shadow bg-gray-600 appearance-none border-slate-900 rounded w-full
          w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6 w-full">
        <label htmlFor="apiTokenInstance" className="block text-gray-300 font-bold mb-2">
          API Token Instance:
        </label>
        <input
          type="text"
          id="apiTokenInstance"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
          required
          className="shadow bg-gray-600 appearance-none border-slate-900 rounded w-full py-2 px-3
          text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white align-center w-2/5
         font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Отправить
      </button>
    </form>
  );
};

export default GreenApiCredentialsInput;