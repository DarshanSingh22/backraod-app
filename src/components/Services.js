import Title from "./Title";
import { services } from "./data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="Services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { icon, title, text, id } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;