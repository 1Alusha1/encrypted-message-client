import { useState } from 'react';
import asyncMethod from '../async';
import style from './CreateMessage.module.css';

export default function CreateMessage() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState(false);
  const create = (e) => {
    e.preventDefault();
    if (message.length <= 3) {
      setError(true);
    } else {
      asyncMethod.createMessage(message, setKey);
      setMessage('');
      setError(false);
    }
  };

  return (
    <div className={style.createMessage}>
      <h1 className={style.title}>Створити повідомлення</h1>

      {key !== '' ? (
        <div className={style.messageKey}>
          <p>Повідомлення зашифровано, тримай ключ: {key.key}</p>
          <p>Збережи ключ, ти його бачиш востаннє!</p>
          <a href='/read-message'>Прочитати повідомлення</a>
        </div>
      ) : (
        ''
      )}

      <form onSubmit={(e) => create(e)} className={style.createMessageForm}>
        <input
          type='text'
          className={error ? style.error : ''}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Зашифрувати</button>
      </form>
      {error && <p>Повідомлення надто коротке</p>}
    </div>
  );
}