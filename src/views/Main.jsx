import style from './Main.module.css';

export default function Main() {
  return (
    <div className={style.main}>
      <h1 className={style.mainTitle}>Головна</h1>
      <div className={style.mainText}>
        Це сервіс для шифрування повідомлень. З його допомогою ви можете
        зашифрувати повідомлення та відправити ключ на це повідомлення будь-кому
        За допомогою ключа можна прочитати повідомлення, але лише один раз.
      </div>
      <div className={style.mainLink}>
        <a href='/create-message'>Зашифрувати повідомлення</a>
        <a href='/read-message'>Прочитати повідомлення</a>
      </div>
    </div>
  );
}
