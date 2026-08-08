import { ArrowUpRight, Phone, Pin } from "../Icons";
import { Reveal } from "../Reveal";
import { site } from "@/config/site";

export function Locations() {
  return (
    <section className="section locations-section" id="locations">
      <div className="site-container">
        <Reveal className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Find your chair</p>
            <h2>Two studios.<br />One community.</h2>
          </div>
          <p>
            Appointments are recommended. Choose the studio that works for you, then check each barber&apos;s current availability.
          </p>
        </Reveal>

        <div className="location-grid">
          {site.locations.map((location, index) => (
            <Reveal key={location.id} delay={index * 110}>
              <article className="location-card">
                <div className="location-card__image">
                  <img
                    src={location.image}
                    alt={location.imageAlt}
                    width={location.imageWidth}
                    height={location.imageHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="location-card__index">0{index + 1}</span>
                  <span className="location-card__city">{location.name}</span>
                </div>

                <div className="location-card__body">
                  <p className="eyebrow">{location.eyebrow}</p>
                  <h3>{location.name}</h3>

                  <a
                    className="location-card__address"
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Pin />
                    <span>{location.address}</span>
                  </a>

                  <a className="location-card__phone" href={location.phoneHref}>
                    <Phone />
                    {location.phone}
                  </a>

                  <p className="location-card__note">
                    <span aria-hidden="true">★</span>
                    {location.note}
                  </p>

                  <div className="location-card__actions">
                    <a
                      className="button button--red"
                      href={location.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {location.bookingLabel}
                      <ArrowUpRight />
                    </a>
                    {location.secondaryBookingUrl ? (
                      <a
                        className="button button--small-ghost"
                        href={location.secondaryBookingUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {location.secondaryBookingLabel}
                      </a>
                    ) : (
                      <a
                        className="button button--small-ghost"
                        href={location.directionsUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get directions
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="availability-note">
          <span>Hours vary by barber</span>
          <p>View each barber&apos;s live schedule and current pricing through Booksy.</p>
          <a href="#book">See booking options <ArrowUpRight /></a>
        </Reveal>
      </div>
    </section>
  );
}
