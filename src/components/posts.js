import styles from "./posts.module.css";

function Posts(props) {
  return (
    <div className={styles.container} id={props.id}>
      <h3>{props.title}</h3>
      <span>{props.body}</span>
    </div>
  );
}

export default Posts;
