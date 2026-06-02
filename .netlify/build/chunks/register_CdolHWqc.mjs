import { s as supabase } from './supabase_BflDeDat.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return new Response("Missing email/password", {
      status: 400
    });
  }
  const { error } = await supabase.auth.signUp({
    email,
    password
  });
  if (error) {
    return new Response(error.message, {
      status: 400
    });
  }
  return redirect("/login");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
