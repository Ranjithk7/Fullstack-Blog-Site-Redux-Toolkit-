import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
import articles from "./article-content";
import { fetchAllArticles } from "../slices/articleSlice";

const ArticlePage = () => {
  const { user, isLoading } = useUser();
  const { articleId } = useParams();
  const { data, fetchStatus, error } = useSelector((state) => state.article)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      const url = `/api/articles/${articleId}`
      const method = 'get'
      dispatch(fetchAllArticles({url, user, method, data}));
    }
  }, [dispatch, articleId, user, isLoading]);
  
  const articleInfo = articles.find((article) => article.name === articleId);
  if (!articleInfo) {
    return <NotFoundPage />;
  }

  const addUpvote = () => {
    const url = `/api/articles/${articleId}/upvote`;
    const method = 'put';
    dispatch(fetchAllArticles({url, user, method}));
  }

  return (
    <>
      <h1>{articleInfo.title}</h1>
      {error && <p>Failed to fetch!!</p>}
      <div className="upvotes-section">
        {user 
          ? fetchStatus ==='success' 
            ? <button onClick={addUpvote}>{ data.canUpvote ? 'Upvote' : 'Already Upvoted'}</button> 
            : fetchStatus
  
          : <button>Log in to upvote</button>}
        <p>This article has {data.upvotes} upvote(s)</p>
      </div>
      {articleInfo.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {user ? (
        <AddCommentForm
          articleName={articleId}
        />
      ) : (
        <button>Log in to add a comment</button>
      )}
      <CommentsList comments={data.comments || []}/>
    </>
  );
};

export default ArticlePage;
