import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_CjI6CjEc.mjs';
import { $ as $$Layout } from './layout_CbtY2rot.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="landing-page"> <!-- HERO --> <section class="hero"> <div class="hero-overlay"></div> <div class="hero-content"> <!-- <p class="tag">Piecing Together Ireland’s Indie Flock</p> --> <h1>Welcome to <br> archIRE</h1> <!-- <div class="hero-content">
            <a href="/profilemain" class="hero-btn">Search</a>
        </div> --> <p class="hero-text">
Piecing Together Ireland's Indie Flock <br> Explore handcrafted
                    games, talented studios, and rising indie developers from
                    across Ireland.
</p> <div class="hero-buttons"> <!-- <a href="/profilemain" class="btn-primary"> Explore Games </a> --> <a href="/studios" class="btn-secondary">
Discover Studios
</a> </div> </div> <div class="floating-card card-1"> <span>🎮 Narrative Adventures</span> </div> <div class="floating-card card-2"> <span>🕹 Pixel Art Worlds</span> </div> <div class="floating-card card-3"> <span>✨ Irish Creativity</span> </div> </section> <!-- FEATURED --> <section class="featured-section container"> <div class="section-header"> <h2>Featured Indie Games</h2> <a href="/games"> View All → </a> </div> <div class="game-grid"> <article class="game-card"> <img src="/games/sample1.jpg" alt="Game"> <div class="game-info"> <h3>Echoes of Tara</h3> <p>Atmospheric puzzle adventure.</p> </div> </article> <article class="game-card"> <img src="/games/sample2.jpg" alt="Game"> <div class="game-info"> <h3>Pixel Drift</h3> <p>Retro inspired arcade racer.</p> </div> </article> <article class="game-card"> <img src="/games/sample3.jpg" alt="Game"> <div class="game-info"> <h3>Fable Isles</h3> <p>Fantasy exploration RPG.</p> </div> </article> </div> </section> <!-- STUDIOS --> <section class="studio-section"> <div class="container studio-wrapper"> <div class="studio-text"> <p class="mini-title">IRISH STUDIOS</p> <h2>Built By Passionate Creators</h2> <p>
From Dublin to Cork, discover studios creating unique
                        experiences inspired by Irish creativity and
                        storytelling.
</p> <a href="/studios" class="btn-primary"> Browse Studios </a> </div> <div class="studio-showcase"> <div class="studio-box large"> <span>Dreamfeel</span> </div> <div class="studio-box"> <span>Gambrinous</span> </div> <div class="studio-box"> <span>Black Shamrock</span> </div> </div> </div> </section> </main> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/index.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
