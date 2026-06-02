import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, e as Fragment, p as renderTemplate, k as addAttribute, n as renderHead, o as renderSlot } from './ssr-function_CjI6CjEc.mjs';
import 'clsx';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Nav;
  const accessToken = Astro2.cookies.get("sb-access-token")?.value;
  const isLoggedIn = !!accessToken;
  return renderTemplate`${maybeRenderHead()}<nav> <ul class="nav-links"> <li><a href="/">HOME</a></li> <li><a href="/studios">CREATORS</a></li> <li class="logo"> <a href="/"> <img src="/Logo.png" alt="archIRE logo"> </a> </li> <li><a href="/news">NEWS</a></li> <!-- AUTH STATE --> ${isLoggedIn ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li> <a href="/dashboard">DASHBOARD</a> </li> <li> <form action="/api/auth/signout" method="POST"> <button class="logout-btn" type="submit">
LOGOUT
</button> </form> </li> ` })}` : renderTemplate`<li> <a href="/login">LOGIN/SIGN UP</a> </li>`} </ul> </nav>`;
}, "D:/Documents/archIRE/archIRE/src/components/nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer-inner"> <p>© 2026 archIRE</p> <p>DISSERTATION</p> <div class="footer-links"> <ul class="footer-col"> <li> <a href="/faq"> FAQ </a> </li> <li> <a href="/about"> ABOUT </a> </li> <li> <a href="/privacypolicy"> Privacy Policy </a> </li> <li> <a href="/accessibility"> Accessibility </a> </li> <li> <a href="https://www.imirt.ie/"> imirt.ie </a> </li> </ul> </div> </div> </footer>`;
}, "D:/Documents/archIRE/archIRE/src/components/footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>archIRE</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&family=IM+Fell+English:ital@0;1&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Documents/archIRE/archIRE/src/layout/layout.astro", void 0);

export { $$Layout as $ };
