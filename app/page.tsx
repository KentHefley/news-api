'use-client'


import slugify from "slugify";
import Link from "next/link";
import { getData } from "@/lib/getData";

console.log(getData());

export default async function Home() {
    const articles = await getData();

    return articles.map((article: any) => {
      const slug = slugify(article.title, {lower: true})

      return (
      <div key={article.url} className="mb-2">
        <Link href={`/articles/${slug}`}>
        <h2 className="text-xl text-blue-600 underline">{article.title}</h2>
        <p>{article.publishedAt}</p>
        </Link>
      </div>
      )
    })
  }
  

