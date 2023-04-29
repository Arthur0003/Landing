import style from './Footer.module.scss';
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as Viber } from '../../assets/icons/viber.svg';
import { ReactComponent as Whatsapp } from '../../assets/icons/whatsapp.svg';

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className='mainContainer'>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <div className={style.about}>
              <h4>О компании</h4>
              <ul className={style.aboutContent}>
                <li>
                  <a href=''>Партнёрская программа</a>
                </li>
                <li>
                  <a href=''>Вакансии</a>
                </li>
              </ul>
            </div>
            <div className={style.menu}>
              <h4>Меню</h4>
              <ul>
                <li>
                  <a href=''>Расчёт стоимости</a>
                </li>
                <li>
                  <a href=''>Кейсы</a>
                </li>
                <li>
                  <a href=''>Услуги</a>
                </li>
                <li>
                  <a href=''>Благодарственные письма</a>
                </li>
                <li>
                  <a href=''>Виджеты</a>
                </li>
                <li>
                  <a href=''>Сертификаты</a>
                </li>
                <li>
                  <a href=''>Интеграции</a>
                </li>
                <li>
                  <a href=''>Блог на Youtube</a>
                </li>
                <li>
                  <a href=''>Наши клиенты</a>
                </li>
                <li>
                  <a href=''>Вопрос / Ответ</a>
                </li>
              </ul>
            </div>
            <div className={style.contacts}>
              <h4>Контакты</h4>
              <p>+7 555 555-55-55</p>
              <div>
                <Telegram className={style.icon} />
                <Viber className={style.icon} />
                <Whatsapp className={style.icon} />
              </div>
              <p>Москва, Путевой проезд 3с1, к 902</p>
            </div>
          </div>
          <div className={style.copyright}>
            <p className={style.copyrightText}>
              ©WELBEX 2022. Все права защищены.
            </p>
            <p className={style.confidential}>
              <a href=''>Политика конфиденциальности</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
