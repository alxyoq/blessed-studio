import { About } from "@/components/sections/About";
import { Booking } from "@/components/sections/Booking";
import { Gallery } from "@/components/sections/Gallery";
import { Locations } from "@/components/sections/Locations";
import { Services } from "@/components/sections/Services";
import { FloatingBooking } from "@/components/FloatingBooking";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { site } from "@/config/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HairSalon",
      "@id": `${site.seo.url}/#gloucester-city`,
      name: site.brand.name,
      image: `${site.seo.url}/images/blessed-logo.jpg`,
      url: site.seo.url,
      telephone: "+1-856-261-8243",
      priceRange: "$$",
      sameAs: site.social.map((item) => item.href),
      address: {
        "@type": "PostalAddress",
        streetAddress: "12 S Broadway Ave",
        addressLocality: "Gloucester City",
        addressRegion: "NJ",
        postalCode: "08030",
        addressCountry: "US",
      },
    },
    {
      "@type": "HairSalon",
      "@id": `${site.seo.url}/#westville`,
      name: `${site.brand.name} - Westville`,
      image: `${site.seo.url}/images/instagram-DXzdItPFVK6.jpg`,
      url: site.seo.url,
      telephone: "+1-856-349-7221",
      priceRange: "$$",
      sameAs: site.social.map((item) => item.href),
      address: {
        "@type": "PostalAddress",
        streetAddress: "200 Gateway Blvd",
        addressLocality: "Westville",
        addressRegion: "NJ",
        postalCode: "08093",
        addressCountry: "US",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Locations />
        <Services />
        <Gallery />
        <About />
        <Booking />
      </main>
      <Footer />
      <FloatingBooking />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
