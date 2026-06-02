import { c as createComponent } from './astro-component_BPD4bJ1x.mjs';
import 'piccolore';
import { r as renderComponent, p as renderTemplate, m as maybeRenderHead, k as addAttribute } from './ssr-function_CjI6CjEc.mjs';
import { $ as $$Layout } from './layout_CbtY2rot.mjs';
import { s as supabase } from './supabase_BflDeDat.mjs';

const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  const { data: studio } = await supabase.from("studios").select("*").eq("slug", slug).single();
  const { data: games } = await supabase.from("games").select("*").eq("studio_id", studio.id);
  const { data: comments } = await supabase.from("comments").select("*").eq("studio_id", studio.id).order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container"> <!-- PROFILE HEADER --> <header class="profile-header"> <div class="studio-pfp"> <img${addAttribute(studio.logo_url, "src")}${addAttribute(studio.name, "alt")}> </div> <div class="studio-title"> <h1>${studio.name}</h1> <!-- <p class="studio-location">
                    📍 {studio.location}
                </p> --> <div class="social-row"> <a class="btn-social"${addAttribute(studio.website, "href")}>
🌐 Website
</a> <a class="btn-social"${addAttribute(studio.socials, "href")}>
🐦 Social
</a> </div> </div> </header> <!-- ABOUT --> <section class="section"> <h2 class="section-title">
About
</h2> <p class="about-text"> ${studio.description_long} </p> </section> <!-- FEATURED GAMES --> <section class="section featured-games"> <h2 class="section-title">
Featured Games
</h2> <div class="featured-carousel"> <div class="game-grid"> ${games?.map((game) => renderTemplate`<article class="game-card"> <!-- IMAGE --> <div class="game-media"> <img${addAttribute(game.images_url, "src")}${addAttribute(game.title, "alt")}> </div> <!-- CONTENT --> <div class="game-content"> <!-- HEADER --> <div class="game-header"> <h3 class="game-title">${game.title}</h3> <span class="game-status"> ${game.status} </span> </div> <!-- DESCRIPTION --> <p class="game-desc"> ${game.description} </p> <!-- TAGS --> <div class="tag-row"> ${game.genre?.map((tag) => renderTemplate`<span class="tag">${tag}</span>`)} </div> <!-- META INFO --> <div class="game-meta"> <span><strong>Platform:</strong> ${game.platform}</span> <span><strong>Release:</strong> ${game.release_year}</span> </div> <!-- ACTION --> <div class="game-actions"> <a${addAttribute(game.link, "href")} target="_blank" class="btn-game-view">
▶ View Game
</a> </div> </div> </article>`)} </div> </div> </section> <!-- SCREENSHOTS --> <section class="section"> <h2 class="section-title"> Screenshots/Media </h2> <div class="media-grid"> ${studio.media_s?.map((image) => renderTemplate`<div class="media-item"> <img${addAttribute(image, "src")}${addAttribute(studio.name, "alt")}> </div>`)} </div> </section> <!-- COMMENTS --> <section class="feedback-box"> <h2 class="feedback-title">
Comments
</h2> <form action="/api/comments/create" method="POST"> <input type="hidden" name="studio_id"${addAttribute(studio.id, "value")}> <input type="hidden" name="slug"${addAttribute(studio.slug, "value")}> <div class="comment-input-wrapper"> <textarea name="content" required placeholder="Write a comment..." class="comment-input"></textarea> <button type="submit" class="send-btn" aria-label="Send comment">
➤
</button> </div> </form> <div class="comments-list"> ${comments?.map((comment) => renderTemplate`<div class="comment-line"> <div class="comment-header"> <span class="comment-id"> ${comment.user_id} </span> </div> <div class="comment-text"> ${comment.content} </div> </div>`)} </div> </section> </main> ` })}`;
}, "D:/Documents/archIRE/archIRE/src/pages/studios/[slug].astro", void 0);

const $$file = "D:/Documents/archIRE/archIRE/src/pages/studios/[slug].astro";
const $$url = "/studios/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
