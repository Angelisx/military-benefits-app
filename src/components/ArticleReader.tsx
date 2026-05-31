import type { Article } from '../types';
import PremiumGuard from './PremiumGuard';
import './ArticleReader.css';

interface ArticleReaderProps {
  article: Article;
}

function highlightAmounts(text: string, amounts: string[] = []): string {
  if (!amounts.length) return text;
  let result = text;
  amounts.forEach(amt => {
    result = result.split(amt).join(`<span class="money">${amt}</span>`);
  });
  return result;
}

export default function ArticleReader({ article }: ArticleReaderProps) {
  const content = (
    <div className="article-reader">
      <div className="article-reader__hero">
        <span className="article-reader__emoji">{article.emoji}</span>
        <div className="article-reader__cat">{article.category}</div>
        <h1 className="article-reader__title">{article.title}</h1>
        <p className="article-reader__subtitle">{article.subtitle}</p>
      </div>
      <div className="article-reader__sections">
        {article.sections.map((s, i) => (
          <div key={i} className="article-reader__section">
            <h2 className="article-reader__section-heading">{s.heading}</h2>
            <p
              className="article-reader__section-body"
              dangerouslySetInnerHTML={{
                __html: highlightAmounts(s.content, s.highlightedAmounts),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (article.proRequired) {
    return <PremiumGuard inline>{content}</PremiumGuard>;
  }

  return content;
}
