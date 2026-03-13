import { register } from "@/src/controllers/authController";

const allowedOrigin = "https://fullstack-vue-next-hjqi.vercel.app"

const corsHeaders = {
  "Access-Control-Allow-Origin": allowedOrigin,
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const result = await register(body);
    return new Response(JSON.stringify(result), {status: 201, headers: corsHeaders});
  } catch (error) {
    return new Response(
      JSON.stringify({error: error.message}),
      {status: error.status || 500, headers: corsHeaders}
    );
  }

}

