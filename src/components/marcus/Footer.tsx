import { Link } from "@tanstack/react-router";
import logo from "@/assets/marcus/logo-vertical.png.asset.json";
import { MARCUS_NAV } from "@/components/marcus/media";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-surface/40 mt-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <div className="h-[17px] w-44 overflow-hidden">
            <img
              src={logo.url}
              alt="Marcus Addis"
              className="h-44 w-auto rotate-90 origin-top-left translate-x-44"
            />
          </div>
          <p className="mt-4 max-w-sm text-secondary leading-relaxed">
            Chef Marcus Samuelsson's first restaurant in Africa — Ethiopian roots,
            Swedish craft, Harlem soul, served at the top of East Africa's tallest
            building.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-eyebrow text-secondary">Visit</div>
          <p className="mt-4 leading-relaxed">
            Head Office Tower, 47th Floor<br />
            Ras Desta Damtew<br />
            Addis Ababa, Ethiopia
          </p>
          <a
            href="tel:+251945111111"
            className="mt-4 inline-block text-eyebrow hover:text-accent"
          >
            +251 945 11 11 11
          </a>
        </div>

        <div className="md:col-span-2">
          <div className="text-eyebrow text-secondary">Index</div>
          <ul className="mt-4 space-y-2">
            {MARCUS_NAV.map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-eyebrow text-secondary">Hours</div>
          <ul className="mt-4 space-y-2 text-secondary">
            <li>Mon–Wed 11:00 – 23:00</li>
            <li>Thu–Sat 11:00 – 02:00</li>
            <li>Sun Brunch 11:00 – 16:00</li>
            <li>Sun Dinner 19:00 – 23:00</li>
          </ul>
          <a href="#" className="mt-4 inline-block hover:text-accent">
            Instagram
          </a>
        </div>

        <div className="md:col-span-12 mt-8 flex items-center justify-between border-t border-primary/10 pt-6 text-xs text-secondary">
          <span>© {new Date().getFullYear()} Marcus Addis</span>
          <span className="text-eyebrow">Ethiopian roots · Swedish craft · Harlem soul</span>
        </div>
      </div>
    </footer>
  );
}
