import { site } from "@/config/site";
import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
  compact?: boolean;
}

export function Brand({ className, compact = false }: BrandProps) {
  return (
    <span className={cn("brand-lockup", compact && "brand-lockup--compact", className)}>
      <span className="brand-word">BLESSED</span>
      <span className="brand-subrow">
        <span className="brand-star" aria-hidden="true">
          ★
        </span>
        <span>Hair Studio</span>
      </span>
      <span className="sr-only">{site.brand.name}</span>
    </span>
  );
}
