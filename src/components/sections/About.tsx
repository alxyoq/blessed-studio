import { ArrowUpRight, Instagram } from "../Icons";
import { Reveal } from "../Reveal";
import { site } from "@/config/site";

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="site-container about-grid">
        <Reveal className="about-images">
          <figure className="about-image about-image--main">
            <img
              src="/images/hann-profile.jpg"
              alt="Hann, owner of Blessed Hair Studio, at work"
              width={2340}
              height={2340}
              loading="lazy"
            />
            <figcaption>Hann · Owner & barber</figcaption>
          </figure>
          <figure className="about-image about-image--secondary">
            <img
              src="/images/instagram-DXzdItPFVK6.jpg"
              alt="The Blessed Hair Studio team"
              width={640}
              height={640}
              loading="lazy"
            />
          </figure>
          <span className="about-star" aria-hidden="true">★</span>
        </Reveal>

        <Reveal className="about-copy" delay={100}>
          <p className="eyebrow">Built for the people</p>
          <h2>More than<br />a haircut.</h2>
          <p className="about-copy__lead">
            Blessed Hair Studio was built to give back, bring people together and create a chair where every guest feels welcome.
          </p>
          <p>
            From Gloucester City to Westville, the standard stays the same: take the craft seriously, treat people right and make every detail count.
          </p>

          <blockquote>
            <span aria-hidden="true">“</span>
            One blessed cut at a time.
          </blockquote>

          <a
            className="text-link"
            href={site.social[0].href}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
            Follow the Blessed movement
            <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
