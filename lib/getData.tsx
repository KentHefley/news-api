export async function getData() {
    const res = await fetch(`https://gnews.io/api/v4/top-headlines?country=us&category=general&limit=10&token=${process.env.GNEWS_API}`, {  next: { revalidate: 43000 } })
  
    const data = await res.json();
    return data.articles
  }