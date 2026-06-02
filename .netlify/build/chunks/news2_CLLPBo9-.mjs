import { c as createComponent } from './astro-component_CiXvUaY5.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_DIdxfoYW.mjs';
import { $ as $$Layout } from './layout_DaWbBERG.mjs';

const $$News2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="article-container"> <div class="hero-image"> <img src="/download.jpg.jpeg" alt="Irish Gaming Market"> </div> <span class="category">INDIE NEWS</span> <h1 class="article-title">
Irish Gaming Market 2026: A Celebration of Ireland’s Gaming
            Community
</h1> <div class="article-meta">By Fathima • May 2026 • 5 min read</div> <div class="article-intro">
From indie showcases and retro gaming to cosplay and community
            events, Irish Gaming Market 2026 highlights the growing influence of
            gaming culture across Ireland.
</div> <div class="article-content"> <p>
Ireland’s gaming culture continues to grow rapidly, and one of
                the most exciting upcoming events for gamers and indie creators
                is the Irish Gaming Market 2026. Taking place on 11–12 July 2026
                in Dún Laoghaire, Dublin, the event is expected to attract
                gaming fans, collectors, developers, and cosplayers from across
                Ireland.
</p> <p>
The Irish Gaming Market is more than just a gaming convention.
                It combines video games, retro gaming, cosplay, tabletop games,
                and pop culture into a large community-focused event.
</p> <p>
One of the key highlights is its support for independent
                creators and indie game developers, giving them a platform to
                showcase their projects directly to the public.
</p> <p>
The event also encourages creativity through cosplay showcases
                and fan communities, strengthening Ireland’s gaming culture.
</p> <p>
Overall, the Irish Gaming Market 2026 represents the continued
                rise of gaming and indie development in Ireland.
</p> <!-- 3 IMAGE GRID --> <div class="image-row"> <img src="/images (1).jpg.jpeg" alt="gaming event 1"> <img src="/download (1) (1).png" alt="gaming event 2"> <img src="/download.jpg.jpeg" alt="gaming event 3"> </div> </div> </div> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/news2.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/news2.astro";
const $$url = "/news2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$News2,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
