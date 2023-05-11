export default async function getAllProducts() {
  const res = await fetch("https://vada-api.onrender.com");

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
