import Link from 'next/link';
import blogData from '../data/blogData.json';

import  styles  from '../styles/blog.module.css';


const Blog = () => {
  return (
    <div>
      <h1 className={styles.myTitle}>Blog Posts</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`} className={styles.myText}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
