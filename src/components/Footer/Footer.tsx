import './Footer.scss';
import footerLogo from '../../assets/footer-logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer__content" role="contentinfo">
        <div className="footer__contactBox">
          <div>
            <p>249039, г.Обнинск Калужской обл., тер. Студгородок, 1. ИАТЭ</p>
            <p>
              Телефон:{' '}
              <a className="colorBlue tel" href="tel:+74843979490">
                +7 (484) 397-94-90
              </a>{' '}
              доб. 111, факс:{' '}
              <a className="colorBlue tel" href="tel:+74843970822">
                +7 (484) 397-08-22
              </a>
            </p>
            <p>
              E-mail:{' '}
              <a className="colorBlue" href="mailto:info@iate.obninsk.ru">
                info@iate.obninsk.ru
              </a>
            </p>
          </div>

          <div>
            <p>
              Приемная комиссия:{' '}
              <a className="colorBlue" href="www.iate.obninsk.ru/node/1364" target="_blank">
                Абитуриенту
              </a>
            </p>
            <p>
              Телефон:{' '}
              <a className="colorBlue tel" href="tel:+74843979490">
                +7 (484) 397-94-90 доб. 801
              </a>
            </p>
            <p>
              E-mail:{' '}
              <a className="colorBlue" href="mailto:priem@iate.obninsk.ru">
                priem@iate.obninsk.ru
              </a>
            </p>
          </div>

          <div className="footer__copyright">
            <p className="footer__copyrightBig">
              ©2017 НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ ЯДЕРНЫЙ УНИВЕРСИТЕТ «МИФИ» (НИЯУ МИФИ) ОБНИНСКИЙ
              ИНСТИТУТ АТОМНОЙ ЭНЕРГЕТИКИ (ИАТЭ)
            </p>
            <p className="footer__copyrightSmall">
              Использование новостных материалов сайта возможно только при наличии активной ссылки
              на{' '}
              <a className="colorBlue" href="www.iate.obninsk.ru" target="_blank">
                www.iate.obninsk.ru
              </a>
            </p>
            <p className="footer__copyrightSmall">
              Размещение и обновление{' '}
              <a className="colorBlue" href="www.iate.obninsk.ru/node/151" target="_blank">
                материалов на сайте
              </a>
            </p>
          </div>
        </div>

        <img className="footer__logo" src={footerLogo} />
      </footer>
    </div>
  );
};
export default Footer;
