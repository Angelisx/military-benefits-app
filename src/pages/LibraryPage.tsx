import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { articles, getArticleById } from '../data/articles';
import ArticleList from '../components/ArticleList';
import ArticleReader from '../components/ArticleReader';
import SlidePanel from '../components/SlidePanel';
import type { Article } from '../types';
import PageHeader from '../components/PageHeader';

export default function LibraryPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const articleId = params.get('article');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(
    articleId ? (getArticleById(articleId) ?? null) : null
  );

  const handleSelect = (a: Article) => {
    setSelectedArticle(a);
    navigate(`/library?article=${a.id}`, { replace: true });
  };

  const handleClose = () => {
    setSelectedArticle(null);
    navigate('/library', { replace: true });
  };

  return (
    <div className="page-scroll">
      <PageHeader title="Library" subtitle={`${articles.length} articles`} />
      <ArticleList onSelect={handleSelect} />
      <SlidePanel
        open={!!selectedArticle}
        onClose={handleClose}
        title={selectedArticle?.title ?? ''}
      >
        {selectedArticle && <ArticleReader article={selectedArticle} />}
      </SlidePanel>
    </div>
  );
}
