import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_CjI6CjEc.mjs';
import { $ as $$Layout } from './layout_CbtY2rot.mjs';

const $$Listing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> <header class="header"> <h1>All Studios</h1> <p>Discover developers from across the island.</p> </header> <!-- FILTER BAR --> <section class="filter-bar"> <div class="search-wrapper"> <span class="search-icon">🔍</span> <input type="text" placeholder="Search studios..." class="filter-input search-input"> </div> <select class="filter-input"> <option>All Genres</option> <option>RPG</option> <option>Puzzle</option> </select> <select class="filter-input"> <option>All Locations</option> <option>Dublin</option> <option>Galway</option> </select> <select class="filter-input"> <option>Tags</option> <option>PC/Steam</option> <option>Mobile</option> </select> </section> <!-- GRID --> <div class="grid"> <!-- CARD 1 --> <article class="studio-card"> <div class="studio-logo">☘️</div> <div class="studio-info"> <div class="studio-header"> <h3 class="studio-name">Emerald Isle Games</h3> <span class="badge">Verified</span> </div> <p class="studio-meta">
📍 Dublin, Ireland • <span>RPG, Adventure</span> </p> <p class="studio-desc">
Creating immersive folklore-driven adventures based in
                        the heart of Dublin since 2018.
</p> <div class="card-footer"> <div class="icon-group"> <div class="icon-dot"></div> <div class="icon-dot"></div> </div> <a href="#" class="btn-view">View Studio →</a> </div> </div> </article> <!-- CARD 2 --> <article class="studio-card"> <div class="studio-logo">🌊</div> <div class="studio-info"> <div class="studio-header"> <h3 class="studio-name">Atlantic Digital</h3> </div> <p class="studio-meta">
📍 Galway, Ireland • <span>Puzzle, Indie Art</span> </p> <p class="studio-desc">
A small team of three crafting minimalist puzzle games
                        inspired by the wild Atlantic coast.
</p> <div class="card-footer"> <span class="games-live">3 Games Live</span> <a href="#" class="btn-view">View Studio →</a> </div> </div> </article> </div> <!-- PAGINATION --> <div class="pagination"> <button class="pg-btn">Prev</button> <button class="pg-btn active">1</button> <button class="pg-btn">2</button> <button class="pg-btn">Next</button> </div> </main> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/listing.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/listing.astro";
const $$url = "/listing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Listing,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
