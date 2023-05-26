import './Header.scss';

const ServiceButton = (logo: string) => {
  const SvgComponent = require(`../../assets/${logo}`);

  return (
    <div className="serviceButton__container">
      <img src={SvgComponent} />
      <span>Получить справку об обучении</span>
    </div>
  );
};
export default ServiceButton;
