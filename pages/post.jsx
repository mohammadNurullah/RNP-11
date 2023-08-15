import { useRouter } from "next/router";
import blogData from "../data/blogData.json";

const Post = () => {
  const router = useRouter();
  const postId = router.query.id; // Get the post ID from the URL

  const post = blogData.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
