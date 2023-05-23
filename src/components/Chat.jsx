import {useEffect, useRef} from "react";

const Chat = ({ messages }) => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      // divRef.current.scrollTop = divRef.current.scrollHeight;
      divRef.current.scrollTop = divRef.current.scrollHeight - divRef.current.clientHeight;
    }
  }, [messages]);
  return (
    <div className="flex flex-col h-5/6 items-end w-full mt-5">
      {/*<div className="flex-1 overflow-y-auto w-4/5 ">*/}
      <div ref={divRef} className="flex-1 overflow-y-auto w-4/5 scroll-bottom">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-lg ${
              message.sender === 'me' ? 'bg-green-700 text-white' : 'bg-gray-700'
            }`}
          >
            <span>{message.sender}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
