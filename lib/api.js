const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchAPI(path) {
  try {
    const res = await fetch(`${API_URL}${path}`);
    if (!res.ok) {
      console.error("API Error:", res.statusText);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}
