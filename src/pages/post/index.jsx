import styles from "../../styles/Home.module.scss";
import Link from "next/link";

export default function Posts({ posts }) {
    return (
      <div className={styles.Pages}>
          
        <div className={styles.Pages__posts}>
        {posts && posts.map((post) => 
        <>
           <Link href={`/`}>
           <h4 key={post.id}>Post id: {post.id}</h4>
           </Link>
           <div className={styles.tags}>
            <span>#{post.tags[0]}</span>
            <span>#{post.tags[1]}</span>
           </div>
        </>
        )}
        </div>  
        
      </div>
    );
  }
  
  export async function getStaticProps() {
    const resPosts = await fetch("https://dummyjson.com/posts");
    const dataPosts = await resPosts.json();
  
    return {
      props: {
        posts: dataPosts.posts
      },
    };
  }