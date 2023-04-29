import style from './Main.module.scss';

export const Main = () => {
  return (
    <div className={style.wrapper}>
      <div className='mainContainer'>
        <div className={style.contentWrapper}>
          <div className={style.leftPart}>
            <h2>Зарабатывайте больше</h2>
            <h3>c WELBEX</h3>
            <p>Развиваем и контролируем продажи за вас</p>
          </div>
          <div className={style.rightPart}>
            <p>
              Вместе с <span>бесплатной</span> <span>консультацией</span> мы
              дарим:
            </p>
            <div className={style.offerBlock}>
              <div className={style.offerItem}>
                <h4>Виджеты</h4>
                <p>30 готовых решений</p>
              </div>
              <div className={style.offerItem}>
                <h4>Dashboard</h4>
                <p>с показателями вашего бизнеса</p>
              </div>
              <div className={style.offerItem}>
                <h4>Skype Аудит</h4>
                <p>отдела продаж и CRM системы</p>
              </div>
              <div className={style.offerItem}>
                <h4>35 дней</h4>
                <p>использования CRM</p>
              </div>
            </div>
            <button className={style.offerBtn}>Получить консультацию</button>
          </div>
        </div>
      </div>
    </div>
  );
};
