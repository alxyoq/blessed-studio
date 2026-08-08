import { ArrowUpRight, Pin, SocialIcon } from "./Icons";
import { Brand } from "./Brand";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>{site.brand.tagline}</p>
          <div className="footer-socials">
            {site.social.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-locations">
          <p className="footer-label">Two locations</p>
          {site.locations.map((location) => (
            <div key={location.id}>
              <h3>{location.name}</h3>
              <a href={location.directionsUrl} target="_blank" rel="noreferrer">
                <Pin />
                {location.address}
              </a>
              <a href={location.phoneHref}>{location.phone}</a>
            </div>
          ))}
        </div>

        <div className="footer-nav">
          <p className="footer-label">Explore</p>
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a href="#book">Book an appointment <ArrowUpRight /></a>
        </div>
      </div>

      <div className="site-container footer-bottom">
        <p>© {year} {site.brand.name}. All rights reserved.</p>
        <p>Gloucester City · Westville · New Jersey</p>
      </div>
    </footer>
  );
}
