import { ArrowUpRight } from "./Icons";
import { site } from "@/config/site";

export function BuyWebsiteButton() {
  return (
    <a
      className="buy-website-button"
      href={site.purchase.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buy this website securely through Stripe"
    >
      <span>{site.purchase.label}</span>
      <ArrowUpRight />
    </a>
  );
}
