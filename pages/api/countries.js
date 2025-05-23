export default async function handler(req, res) {
  const name = req.query.name;
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await response.json();

  if (data && data[0]) {
    res.status(200).json(data[0]);
  } else {
    res.status(404).json({ error: "Țara nu a fost găsită" });
  }
}