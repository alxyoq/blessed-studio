import { ArrowUpRight } from "../Icons";
import { Reveal } from "../Reveal";
import { site } from "@/config/site";

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="services-marquee" aria-hidden="true">
        <span>PRECISION CUTS</span>
        <span>★</span>
        <span>CLEAN FADES</span>
        <span>★</span>
        <span>BEARD CARE</span>
        <span>★</span>
        <span>KIDS CUTS</span>
        <span>★</span>
      </div>

      <div className="site-container">
        <Reveal className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Your cut.<br /><span>Your barber.</span></h2>
          <p>
            Every barber sets their own services, pricing and availability. Start with what you need, then choose the right chair.
          </p>
        </Reveal>

        <div className="service-grid">
          {site.services.map((service, index) => (
            <Reveal key={service.number} delay={Math.min(index * 70, 280)}>
              <article className="service-card">
                <span className="service-card__number">{service.number}</span>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.detail}</p>
                </div>
                <span className="service-card__line" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="services-cta">
          <p>Ready for the next one?</p>
          <a className="button button--silver" href="#book">
            View barbers & availability
            <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
