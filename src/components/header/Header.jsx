import style from './Header.module.scss';
import logo from '../../assets/icons/logo_welbex.png';
import { Navbar } from '../navbar/Navbar';
import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg';
import { ReactComponent as Viber } from '../../assets/icons/viber.svg';
import { ReactComponent as Whatsapp } from '../../assets/icons/whatsapp.svg';

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className='mainContainer'>
        <div className={style.headerWrapper}>
          <div className={style.logoBlock}>
            <img src={logo} alt='logo does not exist' />
            <div className={style.aboutLogo}>
              <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>
          </div>

          <Navbar />

          <div className={style.contacts}>
            {/* <ViberLogo className={style.viber} /> */}
            <p>+7 555 555-55-55</p>
            <div className={style.icons}>
              <Telegram className={style.icon} />
              <Viber className={style.icon} />
              <Whatsapp className={style.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
