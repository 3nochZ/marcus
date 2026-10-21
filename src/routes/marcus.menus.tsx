import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MarcusShell, PageHeader } from "@/components/marcus/PageShell";
import { MEDIA } from "@/components/marcus/media";
import menus from "@/components/marcus/menus.data.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Item = { title: string; desc: string; price: string };
type MenuData = Record<string, Record<string, Item[]>>;
const DATA = menus as MenuData;
const TABS = Object.keys(DATA);

export const Route = createFileRoute("/marcus/menus")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Menus — Marcus Addis" },
      {
        name: "description",
        content:
          "Lunch, Dinner, Bar Menu and Wine List. Ethio-Swedish plates from Chef Marcus Samuelsson.",
      },
      { property: "og:title", content: "Menus at Marcus Addis" },
      {
        property: "og:description",
        content: "Ethio–Swedish plates. Cocktails, wines, and family style.",
      },
      { property: "og:image", content: MEDIA.menusHeader1 },
      { name: "twitter:image", content: MEDIA.menusHeader1 },
    ],
  }),
  component: MenusPage,
});

function MenusPage() {
  const [tab, setTab] = useState(TABS[0]);
  const sections = DATA[tab];
  const subKeys = useMemo(() => Object.keys(sections), [sections]);

  return (
    <MarcusShell>
      <PageHeader
        eyebrow="Menus"
        title={
          <>
            Ethio–Swedish.
            <br />
            <em className="italic font-normal text-accent">Every plate a passport.</em>
          </>
        }
        intro="Chef Marcus draws from his Ethiopian heritage and Swedish upbringing. Prices in ETB."
        image={MEDIA.menusHeader1}
      />

      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-primary/10">
        <div className="px-6 lg:px-16 flex flex-wrap justify-center gap-3 py-6">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-eyebrow px-8 py-4 text-base rounded-full transition-colors ${
                tab === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-primary hover:bg-primary/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-background py-20 lg:py-28">
        <div className="px-6 lg:px-16 max-w-5xl mx-auto">
          <Accordion type="multiple" key={tab} defaultValue={subKeys} className="w-full">
            {subKeys.map((sub) => {
              const items = sections[sub];
              return (
                <AccordionItem
                  key={sub}
                  value={sub}
                  className="border-b border-primary/15 last:border-b-0"
                >
                  <AccordionTrigger className="py-8 hover:no-underline group [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-accent">
                    <div className="flex items-baseline justify-between gap-6 flex-1 pr-4">
                      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-none tracking-tight text-left transition-colors group-hover:text-accent">
                        {sub}
                      </h2>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-10">
                    <ul className="divide-y divide-primary/10">
                      {items.map((it, i) => (
                        <li key={i} className="grid grid-cols-12 gap-4 py-5 items-baseline">
                          <div className="col-span-12 md:col-span-8">
                            <h3 className="font-display text-xl leading-tight">
                              {it.title || <span className="text-secondary italic">Untitled</span>}
                            </h3>
                            {it.desc && (
                              <p className="mt-1 text-secondary text-sm leading-[1.65] max-w-[65ch]">
                                {it.desc}
                              </p>
                            )}
                          </div>
                          <div className="col-span-12 md:col-span-4 md:text-right">
                            <span className="font-display text-lg text-accent whitespace-nowrap">
                              {it.price ? `${it.price.replace(/\$/g, "").trim()} Br` : "—"}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <p className="mt-16 text-center text-eyebrow text-secondary">
            All prices are inclusive of 10% service charge and 15% VAT.
          </p>
        </div>
      </section>
    </MarcusShell>
  );
}
