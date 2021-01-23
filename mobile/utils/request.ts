export const baseURL = "http://localhost:8000";

export const GET = async (url: string) => {
  try {
    const raw = await fetch(baseURL + url);
    const data = await raw.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const POST = async (url: string, payload: any) => {
  try {
    const raw = await fetch(baseURL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${"lol token"}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await raw.json();
    return data;
  } catch (err) {
    throw err;
  }
};
