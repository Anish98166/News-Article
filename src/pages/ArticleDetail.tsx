import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Article Detail</h1>
      <p>Article ID: {id}</p>
    </div>
  );
};

export default ArticleDetail;
