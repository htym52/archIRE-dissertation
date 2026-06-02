import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_CjI6CjEc.mjs';
import { $ as $$Layout } from './layout_CbtY2rot.mjs';

const $$Accessibility = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="container"> <!-- HEADER --> <section class="page-header"> <h1>Accessibility Statement</h1> <p>
archIRE is committed to providing an inclusive digital
                experience that is accessible to all users, including people
                with disabilities.
</p> </section> <!-- COMMITMENT --> <section class="section"> <h2>Our Commitment</h2> <div class="info-box"> <p>
We aim to ensure that archIRE is usable by as many people as
                    possible regardless of ability, technology, or browsing
                    method.
</p> </div> </section> <!-- FEATURES --> <section class="section"> <h2>Accessibility Features</h2> <p>
We actively design and improve the platform with accessibility
                in mind:
</p> <ul class="accessibility-list"> <li>Clear and readable typography</li> <li>High contrast colour palette for visibility</li> <li>Alternative text for images and media where possible</li> </ul> </section> <!-- MEDIA --> <section class="section"> <h2>Media Accessibility</h2> <p>
We aim to make interviews, videos and featured media more
                accessible by including captions, transcripts and text-based
                summaries when available.
</p> <div class="info-box"> <p>
Some older or third-party content may not fully meet
                    accessibility standards, but improvements are ongoing as the
                    platform evolves.
</p> </div> </section> <!-- LIMITATIONS --> <section class="section"> <h2>Known Limitations</h2> <p>
While we strive for full accessibility, some areas of the
                platform may still require improvement, particularly
                user-generated content.
</p> </section> </div> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/accessibility.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/accessibility.astro";
const $$url = "/accessibility";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Accessibility,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
