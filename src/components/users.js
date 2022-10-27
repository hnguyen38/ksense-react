import { useState } from "react";
import Posts from "./posts";
import styles from "./users.module.css";

function Users(props) {
  const [posts, setPosts] = useState([]);
  const [isActive, setIsActive] = useState(false);

  function handleSeePost(id) {
    if (isActive === false) {
      setIsActive(true);
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) => res.json())
        .then((json) => {
          setPosts(json);
        })
        .catch((err) => console.log(err));
    } else {
      setIsActive(false);
    }
  }

  return (
    <div id={props.userId} className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.name}>{props.users}</h1>
        <button
          className={styles.btn}
          id={props.userId}
          onClick={() => handleSeePost(props.userId)}
          type="button"
        >
          {isActive ? "Hide Post" : "See Post"}
        </button>
      </div>
      {isActive
        ? posts.map((post) => (
            <Posts
              id={post.userId}
              title={post.title}
              body={post.body}
              key={post.id}
            />
          ))
        : null}
    </div>
  );
}

export default Users;
