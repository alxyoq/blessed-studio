import { ArrowUpRight, Phone } from "../Icons";
import { Reveal } from "../Reveal";
import { site } from "@/config/site";

export function Booking() {
  return (
    <section className="section booking-section" id="book">
      <div className="booking-backdrop" aria-hidden="true">
        <img
          src="/images/instagram-DFX_3sNpmPO.jpg"
          alt=""
          width={640}
          height={640}
        />
      </div>

      <div className="site-container booking-inner">
        <Reveal className="booking-heading">
          <p className="eyebrow">Book your next cut</p>
          <h2>Choose<br />your chair.</h2>
          <p>
            Select a location or barber to see current services, pricing and open appointment times.
          </p>
        </Reveal>

        <div className="booking-grid">
          {site.bookingOptions.map((option, index) => (
            <Reveal key={option.name} delay={index * 90}>
              <a
                className="booking-card"
                href={option.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="booking-card__index">0{index + 1}</span>
                <span className="booking-card__location">{option.location}</span>
                <h3>{option.name}</h3>
                <p>{option.detail}</p>
                <span className="booking-card__cta">
                  {option.label}
                  <ArrowUpRight />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="booking-phone-row">
          <p>Prefer to call?</p>
          {site.locations.map((location) => (
            <a key={location.id} href={location.phoneHref}>
              <Phone />
              <span>
                <small>{location.name}</small>
                {location.phone}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
