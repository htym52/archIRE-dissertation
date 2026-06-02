import { c as createComponent } from './astro-component_CiXvUaY5.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_DIdxfoYW.mjs';
import { $ as $$Layout } from './layout_DaWbBERG.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="page-header"> <h1>Meet the Creators</h1> <p>
The team behind the research, design and development of this
                dissertation project.
</p> </div> <div class="team-grid"> <!-- MYTHILI --> <div class="profile-card"> <div class="profile-image"> <img src="/creators/mythili.jpg" alt="Mythili Pallichadath Nair"> </div> <h2>Mythili Pallichadath Nair</h2> <p>
A digital media enthusiast with a strong focus on design and
                    backend systems, Mythili contributed to the coding,
                    development and backend of our website showcasing Irish
                    indie games, helping build a reliable and well-structured
                    platform that supports a seamless user experience. With a
                    creative mindset shaped by her interests in music,
                    photography and gaming, she brings patience, adaptability
                    and attention to detail to her work behind the scenes.
</p> </div> <!-- FATHIMA --> <div class="profile-card"> <div class="profile-image"> <img src="/creators/fathima.jpg" alt="Fathima Najah"> </div> <h2>Fathima Najah</h2> <p>
A lover of all things words, from reading and writing to
                    storytelling and conversation, with a creative eye for
                    fashion and beauty, Fathima contributed to the research,
                    content and interviews behind our website showcasing Irish
                    indie games, helping bring the aesthetics and stories of
                    Ireland’s indie game scene to life.
</p> </div> <!-- AJMAL --> <div class="profile-card"> <div class="profile-image"> <img src="/creators/ajmal.jpg" alt="Ajmal Nazeer"> </div> <h2>Ajmal Nazeer</h2> <p>
A digital media designer with a strong focus on web
                    development, UI/UX design and interactive platform creation,
                    Ajmal contributed to the coding and development of our
                    website showcasing Irish indie games. With a disciplined and
                    structured approach shaped by his interest in fitness, he
                    brings focus and precision to his design and development
                    work.
</p> </div> </div> </div> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/about.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
