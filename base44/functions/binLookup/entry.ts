import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { bin } = await req.json();

    if (!bin) {
      return Response.json({ error: 'BIN is required' }, { status: 400 });
    }

    const response = await fetch(`https://bin-ip-checker.p.rapidapi.com/?bin=${bin}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '5c73c39f9fmsh657b606dfa61046p16d2c3jsn127ed336a63b',
        'x-rapidapi-host': 'bin-ip-checker.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});