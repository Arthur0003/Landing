import style from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <ul className={style.list}>
      <li>Услуги</li>
      <li>Виджеты</li>
      <li>Интеграции</li>
      <li>Кейсы</li>
      <li>Сертификаты</li>
    </ul>
  );
};
