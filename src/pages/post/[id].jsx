import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "@/styles/dPost.module.scss";
import Link from "next/link";

export default function () {
  const router = useRouter();
  let { id } = router.query;

  const [postData, setPostData] = useState({});

  useEffect(() => { 
    if (router.isReady) 
    fetch(`https://dummyjson.com/users/${id}`) 
    .then(res => res.json()) 
    .then(data => setPostData(data)) 
  }, [router.isReady])

  
  return (
    <div className={styles.dPost}>
      <Link href={`/`}>
      <img src={postData.image} alt={postData.title} />
      <h1>{postData?.title}</h1>
      <p>{postData?.body}</p>
      </Link>
    </div>
  );
}
