import { useState } from 'react';
import asyncMethod from '../async';
import style from './ReadMessage.module.css';

export default function ReadMessage() {
  const [key, setKey] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const getMessages = (e) => {
    e.preventDefault();
    if (key.length < 12) {
      setError(true);
    } else {
      asyncMethod.getMessage(key, setMessage);
      setError(false);
    }
  };
  return (
    <div className={style.readMessage}>
      <h1>Прочесть сообщение</h1>

      <form onSubmit={(e) => getMessages(e)} className={style.readMessageForm}>
        <input
          type='text'
          className={error ? style.error : ''}
          onChange={(e) => setKey(e.target.value)}
        />
        <button>Отримати повідомлення</button>
      </form>
      {error && <p>Ключ має містити 12 символів</p>}

      {message !== '' ? (
        <div className={style.message}>
          Ваше повідомлення : {message[0].message}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
