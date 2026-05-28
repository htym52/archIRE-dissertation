import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const formData = await request.formData();

    const content = formData.get("content")?.toString();
    const studio_id = formData.get("studio_id")?.toString();
    const slug = formData.get("slug")?.toString();

    const accessToken = cookies.get("sb-access-token")?.value;

    if (!accessToken) { return redirect("/login"); }

    const { data: { user } } = await supabase.auth.getUser(accessToken);

    if (!user) { return redirect("/login"); }

    const { error } = await supabase.from("comments").insert({
        content,
        studio_id,
        user_id: user.id,
    });

    if (error) {
        console.log("Error creating comment:", error);
        return new Response("Error creating comment", { status: 400 });
    }

    return redirect(`/studios/${slug}`);
};