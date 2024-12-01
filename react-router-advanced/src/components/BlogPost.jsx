import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Displaying content for post ID: {postId}</p>
    </div>
  );
};

export default BlogPost;
