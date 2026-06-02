import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead } from './ssr-function_CjI6CjEc.mjs';
import { $ as $$Layout } from './layout_CbtY2rot.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="login-container"> <form method="POST" action="/api/auth/register"> <h1>Create Account</h1> <input type="email" name="email" placeholder="Email" required> <input type="password" name="password" placeholder="Password" required> <button type="submit"> Sign Up </button> <p class="auth-link">
Already have an account?
<a href="/login"> Login </a> </p> </form> </section> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/register.astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Register,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
