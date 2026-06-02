import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_CjI6CjEc.mjs';
import { $ as $$Layout } from './layout_CbtY2rot.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container"> <!-- HEADER --> <section class="page-header"> <h1>Frequently Asked Questions</h1> <p>
Find answers about archIRE, Irish game studios, developer
                profiles, media content and platform features.
</p> </section> <!-- FAQ --> <section class="faq-section"> <div class="faq-item"> <h2 class="faq-question">What is archIRE?</h2> <p class="faq-answer">
archIRE is a platform designed to showcase Irish game
                    studios, developer interviews, featured media, and industry
                    news.
</p> </div> <div class="faq-item"> <h2 class="faq-question">
Does archIRE support indie developers?
</h2> <p class="faq-answer">
The platform is focused on supporting independent Irish
                    developers by improving visibility and community engagement.
</p> </div> <div class="faq-item"> <h2 class="faq-question">
Can users leave comments or feedback?
</h2> <p class="faq-answer">
Yes. Community interaction features include comments,
                    feedback sections, and discussion around projects and
                    interviews.
</p> </div> <div class="faq-item"> <h2 class="faq-question">
Will there be interviews and featured articles?
</h2> <p class="faq-answer">
Yes. archIRE includes studio spotlight interviews, developer
                    stories, media showcases, and article content.
</p> </div> </section> </div> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/faq.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Faq,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
