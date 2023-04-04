import { getData } from '@/lib/getData'
import slugify from 'slugify';

export const generateStaticParams = async () => {
const articles = await getData();
return articles.map((article: any) => ({
  slug: slugify(article.title),
  title: article.title,
  content: article.content,
}))
}

export default function Article({params}: any) {
const {title, content, slug} = params;
  return (
    <div>
        <div key={slug}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div> 
    </div>
  )
}

