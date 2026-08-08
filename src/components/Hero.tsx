import { ArrowUpRight, Pin } from "./Icons";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/images/gloucester-cut-3.jpg"
          alt=""
          width={1365}
          height={2048}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-red-line" aria-hidden="true" />

      <div className="site-container hero-inner">
        <div className="hero-copy">
          <div className="hero-logo-frame">
            <img src={site.brand.logo} alt={site.brand.name} width={959} height={407} />
          </div>

          <p className="eyebrow hero-eyebrow">
            <span>Gloucester City</span>
            <span className="eyebrow-star" aria-hidden="true">★</span>
            <span>Westville</span>
          </p>

          <h1>
            Two locations.
            <span>One standard.</span>
          </h1>

          <p className="hero-lede">
            Precision cuts, clean fades and a welcoming chair at two South Jersey studios.
          </p>

          <div className="hero-actions">
            <a className="button button--red" href="#locations">
              Choose your location
              <ArrowUpRight />
            </a>
            <a className="button button--ghost" href="#work">
              See our work
            </a>
          </div>

          <ul className="proof-strip" aria-label="Studio highlights">
            <li>
              <strong>4.9</strong>
              <span>Booksy rating</span>
            </li>
            <li>
              <strong>2</strong>
              <span>South Jersey studios</span>
            </li>
            <li>
              <strong>100+</strong>
              <span>Booksy reviews</span>
            </li>
          </ul>
        </div>

        <aside className="hero-location-card">
          <span className="hero-location-card__number">02</span>
          <p className="eyebrow">Now in Westville</p>
          <h2>Choose your barber. Lock in your time.</h2>
          <p>
            Hours vary by barber. Check live availability when you book.
          </p>
          <a href="#locations">
            <Pin />
            View both studios
          </a>
        </aside>
      </div>

      <a className="hero-scroll" href="#locations" aria-label="Scroll to locations">
        <span />
        Scroll
      </a>
    </section>
  );
}
