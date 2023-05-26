import './Footer.scss';
import footerLogo from '../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__contactBox">
        <div>
          <p>249039, г.Обнинск Калужской обл., тер. Студгородок, 1. ИАТЭ</p>
          <p>
            Телефон: <span className="colorRed">+7 (484) 397-94-90</span> доб. 111, факс:{' '}
            <span className="colorRed">+7 (484) 397-08-22</span>
          </p>
          <p>
            E-mail:{' '}
            <a className="colorRed" href="mailto:info@iate.obninsk.ru">
              info@iate.obninsk.ru
            </a>
          </p>
        </div>

        <div>
          <p>
            Приемная комиссия:{' '}
            <a className="colorRed" href="www.iate.obninsk.ru/node/1364">
              Абитуриенту
            </a>
          </p>
          <p>
            Телефон: <span className="colorRed">+7 (484) 397-94-90 доб. 801</span>
          </p>
          <p>
            E-mail:{' '}
            <a className="colorRed" href="mailto:priem@iate.obninsk.ru">
              priem@iate.obninsk.ru
            </a>
          </p>
        </div>

        <div className="footer__copyright">
          <p>
            ©2017 НАЦИОНАЛЬНЫЙ ИССЛЕДОВАТЕЛЬСКИЙ ЯДЕРНЫЙ УНИВЕРСИТЕТ «МИФИ» (НИЯУ МИФИ) ОБНИНСКИЙ
            ИНСТИТУТ АТОМНОЙ ЭНЕРГЕТИКИ (ИАТЭ)
          </p>
          <p>
            Использование новостных материалов сайта возможно только при наличии активной ссылки на{' '}
            <a className="colorRed" href="www.iate.obninsk.ru">
              www.iate.obninsk.ru
            </a>
            <br />
            Размещение и обновление{' '}
            <a className="colorRed" href="www.iate.obninsk.ru/node/151">
              материалов на сайте
            </a>
          </p>
        </div>
      </div>

      <img className="footer__logo" src={footerLogo} />
    </footer>
  );
};
export default Footer;
