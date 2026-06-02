import { c as createComponent } from './astro-component_CiXvUaY5.mjs';
import 'piccolore';
import { p as renderTemplate } from './ssr-function_DIdxfoYW.mjs';
import 'clsx';

const $$Studio = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ---
import Layout from "../layout/layout.astro";
import { supabase } from "../lib/supabase";

const { data: studios } = await supabase.from("studios").select("*");
---

<Layout>
    <main class="container">
        <div class="header">
            <h1>Irish Indie Studios</h1>

            <p>Discover independent game developers across Ireland.</p>
        </div>

        <div class="studio-grid">
            {
                studios?.map((studio) => (
                    <a href={\`/studios/\${studio.slug}\`} class="studio-link">
                        <article class="studio-card">
                            <div class="studio-logo">
                                <img src={studio.logo_url} alt={studio.name} />
                            </div>

                            <div class="studio-info">
                                <div class="studio-header">
                                    <h2 class="studio-name">{studio.name}</h2>
                                </div>

                                <p class="studio-meta">{studio.location}</p>

                                <p class="studio-desc">{studio.description}</p>
                            </div>
                        </article>
                    </a>
                ))
            }
        </div>
    </main>
</Layout> -->`;
}, "D:/Documents/archIRE/archIRE/src/pages/studio.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/studio.astro";
const $$url = "/studio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Studio,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
