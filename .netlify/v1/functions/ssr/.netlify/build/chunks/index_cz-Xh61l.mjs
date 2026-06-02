import { c as createComponent } from './astro-component_CiXvUaY5.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead, k as addAttribute } from './ssr-function_DIdxfoYW.mjs';
import { $ as $$Layout } from './layout_DaWbBERG.mjs';
import { s as supabase } from './supabase_BflDeDat.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const query = Astro2.url.searchParams.get("q") || "";
  let studios = [];
  if (query) {
    const { data, error } = await supabase.from("studios").select("*").ilike("name", `%${query}%`).order("name", { ascending: true });
    studios = data || [];
    console.log(error);
  } else {
    const { data, error } = await supabase.from("studios").select("*").order("name", { ascending: true });
    studios = data || [];
    console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> <!-- HEADER --> <div class="header"> <h1>Irish Indie Studios</h1> <p>
Discover independent game developers across Ireland.
</p> </div> <!-- SEARCH BAR --> <form method="GET" class="search-form"> <input type="text" name="q" placeholder="Search studios..."${addAttribute(query, "value")}> <button type="submit">
Search
</button> </form> <!-- STUDIO GRID --> <div class="studio-grid"> ${studios?.map((studio) => renderTemplate`<a${addAttribute(`/studios/${studio.slug}`, "href")} class="studio-link"> <article class="studio-card"> <!-- LOGO --> <div class="studio-logo"> <img${addAttribute(studio.logo_url, "src")}${addAttribute(studio.name, "alt")}> </div> <!-- INFO --> <div class="studio-info"> <div class="studio-header"> <h2 class="studio-name"> ${studio.name} </h2> </div> <p class="studio-meta"> ${studio.location} </p> <p class="studio-desc"> ${studio.description_short} </p> </div> </article> </a>`)} </div> </main> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/studios/index.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/studios/index.astro";
const $$url = "/studios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
