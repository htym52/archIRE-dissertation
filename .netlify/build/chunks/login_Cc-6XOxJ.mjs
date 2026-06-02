import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_CjI6CjEc.mjs';
import { $ as $$Layout } from './layout_CbtY2rot.mjs';

const prerender = false;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="login-container"> <form method="POST" action="/api/auth/signin"> <h1>Login</h1> <input type="email" name="email" placeholder="Email" required> <input type="password" name="password" placeholder="Password" required> <button type="submit"> Login </button> <p class="auth-link">
Don't have an account?
<a href="/register"> Sign Up </a> </p> </form> </section> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/login.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
