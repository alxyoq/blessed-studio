import { ArrowUpRight, Instagram } from "../Icons";
import { Reveal } from "../Reveal";
import { site } from "@/config/site";

export function Gallery() {
  return (
    <section className="section gallery-section" id="work">
      <div className="site-container">
        <Reveal className="gallery-heading">
          <div>
            <p className="eyebrow">The work speaks</p>
            <h2>Fresh from<br />the chair.</h2>
          </div>
          <a
            href={site.social[0].href}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
            More cuts on Instagram
            <ArrowUpRight />
          </a>
        </Reveal>

        <div className="gallery-grid">
          {site.gallery.map((image, index) => (
            <Reveal
              key={image.src}
              className={"gallery-item gallery-item--" + (index + 1)}
              delay={Math.min(index * 65, 260)}
            >
              <figure>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                />
                <figcaption>
                  <span>0{index + 1}</span>
                  Blessed portfolio
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
