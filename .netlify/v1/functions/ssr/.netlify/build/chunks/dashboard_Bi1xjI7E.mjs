import { c as createComponent } from './astro-component_CiXvUaY5.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_DIdxfoYW.mjs';
import { $ as $$Layout } from './layout_DaWbBERG.mjs';

const prerender = false;
const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Dashboard;
  const accessToken = Astro2.cookies.get("sb-access-token");
  if (!accessToken) {
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="welcome-row"> <h1>Hi, Welcome.</h1> <form action="/api/auth/signout" method="POST"> <button type="submit">Logout</button> </form> </div> ` })} <!-- you need to take a screenshot of the dashboard page. -->`;
}, "D:/Documents/archIRE/archIRE/src/pages/dashboard.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
