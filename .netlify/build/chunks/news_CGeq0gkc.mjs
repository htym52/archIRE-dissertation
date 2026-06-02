import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_CjI6CjEc.mjs';
import { $ as $$Layout } from './layout_CbtY2rot.mjs';

const $$News = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="news-page"> <header class="news-header"> <h1>News & Updates</h1> <p>
Latest stories, showcases, development logs and announcements
                from Irish indie game studios.
</p> </header> <section class="featured-news"> <!-- LARGE FEATURE --> <article class="featured-card"> <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop" alt="featured news"> <div class="featured-overlay"></div> <div class="featured-content"> <span class="featured-tag">Featured</span> <h2>Irish Indie Games: News & Stories</h2> <!-- <p>
                        Atmospheric worlds, handcrafted storytelling, and
                        experimental gameplay are shaping a new wave of Irish
                        indie development.
                    </p> --> <a href="/news1" class="featured-btn">Read Article</a> </div> </article> <!-- SIDE CARDS --> <div class="side-news"> <a href="/news2" class="small-card-link"> <article class="small-card"> <img src="/download.jpg.jpeg" alt="news"> <div class="small-content"> <!-- <span>Dev Log</span> --> <h3>Irish Gaming Market 2026 Brings Ireland’s Gaming Community Together</h3> </div> </article> </a> <a href="/news3" class="small-card-link"> <article class="small-card"> <img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop" alt="news"> <div class="small-content"> <span>Event</span> <h3>Dublin Indie Showcase Returns</h3> </div> </article> </a> </div> </section> </main> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/news.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/news.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$News,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
