import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1545214766-04116e13521c",
  starters: "https://images.unsplash.com/photo-1762305195844-94479ea6aca4",
  gradele: "https://images.unsplash.com/photo-1768322264423-4b0adf0cf31b",
  crniRizot: "https://images.unsplash.com/photo-1780823232707-0e3bf0390c74",
  pizza: "https://images.unsplash.com/photo-1614442316719-1e38c661c29c",
  storyHarbor: "https://images.unsplash.com/photo-1779720987586-ef5ae270fe27",
  boatsWhite: "https://images.unsplash.com/photo-1491655275136-b70f977cb5da",
  boatsWall: "https://images.unsplash.com/photo-1762698579986-de90899d5a28",
  net: "https://images.unsplash.com/photo-1538904029080-68e0f3167224",
  olive: "https://images.unsplash.com/photo-1755404389864-6f6cc98c29ac",
  cove: "https://images.unsplash.com/photo-1719603018957-3d69bbc54c64",
  girice: "https://images.unsplash.com/photo-1761168941808-ceeeb0acbdf4",
  octopusSalad: "https://images.unsplash.com/photo-1764397514690-82da4d4c40ed",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za početak",
    image: IMG.starters,
    dishes: [
      { name: "Lignje na žaru", desc: "Domaći ulov, samo maslinovo ulje, češnjak i peršin." },
      { name: "Girice pržene", desc: "Sitna riba iz pašmanskog kanala, pržena do hrskavog, s limunom." },
      { name: "Salata od hobotnice", desc: "Kuhana hobotnica, krumpir, luk i domaće maslinovo ulje." },
      { name: "Pršut i domaći sir", desc: "S maslinama i toplim kruhom iz peći." },
    ],
  },
  {
    cat: "Crni rižot i tjestenine",
    image: IMG.crniRizot,
    dishes: [
      { name: "Crni rižot s plodovima mora", desc: "Rižot bojan sipinim crnilom, s dagnjama, škampima i lignjama." },
      { name: "Špageti sa škampima", desc: "Na buzaru, s bijelim vinom, češnjakom i rajčicom." },
      { name: "Brudet s palentom", desc: "Miješana riba u gustom umaku, kuhana polako, kako se nekad kuhalo." },
    ],
  },
  {
    cat: "S gradela",
    image: IMG.gradele,
    dishes: [
      { name: "Brancin ili komarča", desc: "Cijela riba s gradela, na kilogram, uz blitvu i krumpir." },
      { name: "Hobotnica ispod peke", desc: "Sočna, s krumpirom i ružmarinom, priprema se unaprijed." },
      { name: "Miješano meso s gradela", desc: "Ćevapi, pljeskavica i vešalica, uz domaći pomfrit." },
    ],
  },
  {
    cat: "Pizza iz peke",
    image: IMG.pizza,
    dishes: [
      { name: "Frutti di mare", desc: "Plodovi mora, rajčica i češnjak, iz krušne peći." },
      { name: "Capricciosa", desc: "Šunka, gljive, artičoke i masline." },
      { name: "Margherita", desc: "Rajčica, mozzarella i bosiljak — klasika za najmlađe goste." },
    ],
  },
];

const GALLERY = [
  { src: IMG.boatsWhite, alt: "Ribarski brodovi u luci Pašman", tall: true },
  { src: IMG.net, alt: "Ribarska mreža" },
  { src: IMG.octopusSalad, alt: "Hobotnica s dalmatinskom salatom" },
  { src: IMG.boatsWall, alt: "Male barke privezane uz kamenu rivu", wide: true },
  { src: IMG.olive, alt: "Domaće masline" },
  { src: IMG.girice, alt: "Pržene girice s limunom" },
  { src: IMG.cove, alt: "Mirna otočka uvala u suton", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Ribarski brodovi u staroj luci na otoku Pašmanu, u zoru"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--ochre)" }}>
            Konoba &amp; Caffe · Otok Pašman
          </span>
          <h1
            className="font-display reveal max-w-[17ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "#FBF7EC" }}
          >
            Stol na rivi, <em className="italic" style={{ color: "var(--ochre)" }}>riba ravno iz mriže</em>.
          </h1>
          <p className="reveal mt-6 max-w-[44ch] text-[1.05rem]" style={{ color: "rgba(251,247,236,0.78)" }}>
            Obiteljska konoba uz staru ribarsku luku u Pašmanu — bez pompe, uz dobru ribu, domaće vino i pogled na brodice od 1998.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:+38523260064"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--cobalt)", color: "#FBF7EC" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--ochre)]"
              style={{ borderColor: "rgba(251,247,236,0.35)", color: "#FBF7EC" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="3.9" data-dec="1" style={{ color: "var(--foreground)" }}>
              3.9
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ Tripadvisor ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="72" data-suffix="+" style={{ color: "var(--foreground)" }}>
              72+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija gostiju</div>
          </div>
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>1998</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Obiteljska konoba od</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="luka" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--cobalt)" }}>Naša riva</span>
          <p className="font-display reveal text-[clamp(1.5rem,3vw,2.3rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Nema fensi tanjura ni čekanja na rezervaciju iz snova —{" "}
            <em className="italic" style={{ color: "var(--cobalt)" }}>samo ono što je ulovljeno jutros, skuhano pošteno i servirano uz pogled na brodice.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--cobalt)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]" style={{ color: "var(--foreground)" }}>
              S mora ravno na <em className="italic" style={{ color: "var(--cobalt)" }}>gradele</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--background)" }}
              >
                <div className="min-h-[260px] md:min-h-[340px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--ochre)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="reveal mt-12 text-center font-display italic text-lg" style={{ color: "var(--muted-foreground)" }}>
            Ponuda ovisi o ulovu dana — pitajte konobara što je danas najsvježije.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.storyHarbor, 1000)} alt="Male barke privezane uz staru ribarsku luku u Pašmanu" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--cobalt)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.8rem,3.4vw,2.6rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Konoba uz staru <em className="italic" style={{ color: "var(--cobalt)" }}>ribarsku luku</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              De Loro stoji na rivi u mjestu Pašman od 1998. — konoba i caffe u jednom, s pogledom na staru ribarsku luku gdje se brodice ljuljaju cijeli dan. Vodi je ista obitelj od početka, bez velikih priča, samo s dobrom robom i poštenom cijenom.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Ovdje jedu i mještani — to je, kažu, najbolji znak. Girice, lignje i crni rižot dolaze iz istog kanala pored kojeg sjedite, kruh i pomfrit su domaći, a terasa je dovoljno velika za cijelu ekipu, u hladu ili na suncu.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--cobalt)" }}>
              — obitelj De Loro, Pašman
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--cobalt)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]" style={{ color: "var(--foreground)" }}>
              Život uz <em className="italic" style={{ color: "var(--cobalt)" }}>rivu</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--card)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--cobalt)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.8rem,3.4vw,2.6rem)] mb-8" style={{ color: "var(--foreground)" }}>
              Tu smo, uz <em className="italic" style={{ color: "var(--cobalt)" }}>luku</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--ochre)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Pašman 1, 23262 Pašman, Hrvatska</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--ochre)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Stol rezervirajte pozivom — najbolje unaprijed, ljeti je gužva.</p>
              <a href="tel:+38523260064" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--cobalt)" }}>
                +385 23 260 064
              </a>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--ochre)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Svaki dan</span><span>13:00 – 22:00</span>
              </div>
            </div>

            <a
              href="tel:+38523260064"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--cobalt)", color: "#FBF7EC" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Konoba+Caffe+De+Loro+Pasman&output=embed"
              loading="lazy"
              title="Konoba De Loro — Pašman"
              className="h-full w-full min-h-[360px] border-0"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--ink)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "#FBF7EC" }}>
                De <span style={{ color: "var(--ochre)" }}>Loro</span>
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "rgba(251,247,236,0.55)" }}>
                Konoba &amp; Caffe na rivi u Pašmanu. Obiteljska kuhinja, svježa riba i pogled na staru ribarsku luku od 1998.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--ochre)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(251,247,236,0.55)" }}>
                <a href="#jelovnik" className="hover:text-[var(--ochre)]">Jelovnik</a>
                <a href="#prica" className="hover:text-[var(--ochre)]">Naša priča</a>
                <a href="#galerija" className="hover:text-[var(--ochre)]">Galerija</a>
                <a href="#kontakt" className="hover:text-[var(--ochre)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--ochre)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(251,247,236,0.55)" }}>
                <a href="tel:+38523260064" className="font-display text-lg" style={{ color: "#FBF7EC" }}>+385 23 260 064</a>
                <p>Pašman 1, 23262 Pašman, Hrvatska</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "var(--ink-border)", color: "rgba(251,247,236,0.4)" }}
          >
            <span>© 2026 Konoba &amp; Caffe De Loro · Pašman</span>
            <span>3.9 ★ Tripadvisor · 72+ recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}
