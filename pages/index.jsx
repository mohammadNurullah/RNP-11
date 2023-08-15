import Link from 'next/link';
import styles from '../styles/post.module.css'



const Home = () => {
  return (
    <div>
      <h1 className={styles.myTitile}>Welcome to My Next.js Blog!</h1>
      <Link href="/blog" className={styles.myText}>
        Visit the Blog
      </Link>
    </div>
  );
};

export default Home;
