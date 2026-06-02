import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_CjI6CjEc.mjs';
import { $ as $$Layout } from './layout_CbtY2rot.mjs';

const $$Privacypolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <!-- HEADER --> <section class="page-header"> <h1>Privacy Policy</h1> <p>
This Privacy Policy explains how archIRE collects, uses and
                protects user information across the platform.
</p> </section> <!-- INTRO --> <section class="policy-section"> <div class="policy-box"> <p>
archIRE is committed to protecting user privacy and ensuring
                    a secure experience for developers, studios and visitors
                    using the platform.
</p> <p>
By using archIRE, users agree to the practices described in
                    this policy.
</p> </div> </section> <!-- INFORMATION COLLECTION --> <section class="policy-section"> <h2>Information We Collect</h2> <p>
The platform may collect limited information to improve user
                experience and platform functionality.
</p> <ul class="policy-list"> <li>Usernames and profile information</li> <li>Email addresses during registration</li> <li>Comments and community feedback</li> <li>Uploaded media and studio content</li> <li>Basic analytics and usage data</li> </ul> </section> <!-- HOW WE USE DATA --> <section class="policy-section"> <h2>How Information Is Used</h2> <p>Collected information may be used to:</p> <ul class="policy-list"> <li>Provide platform functionality</li> <li>Improve user experience and accessibility</li> <li>Display studio profiles and media content</li> <li>Support moderation and community safety</li> <li>Develop future platform features</li> </ul> </section> <!-- CONTENT --> <section class="policy-section"> <h2>User Content & Media</h2> <p>
Studios and users may upload screenshots, videos, interviews and
                related media content.
</p> <p>
Users remain responsible for the content they publish and must
                ensure they own or have permission to use uploaded material.
</p> </section> <!-- SECURITY --> <section class="policy-section"> <h2>Data Protection</h2> <p>
archIRE aims to apply reasonable security measures to protect
                stored information and platform content.
</p> <p>However, no online platform can guarantee complete security.</p> </section> <!-- THIRD PARTY --> <section class="policy-section"> <h2>Third-Party Links</h2> <p>
The platform may contain links to external websites, social
                media pages or developer platforms.
</p> <p>
archIRE is not responsible for the privacy practices of external
                websites.
</p> </section> <!-- UPDATES --> <section class="policy-section"> <h2>Policy Updates</h2> <p>
This Privacy Policy may be updated periodically to reflect
                platform changes and future development.
</p> </section> </div> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/privacypolicy.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/privacypolicy.astro";
const $$url = "/privacypolicy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Privacypolicy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
