import { useState, useEffect } from "react";
import Users from "../components/users";
import styles from "./userData.module.css";

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUsers(json);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {users.map((user) => (
        <div className={styles.container} key={user.id}>
          <Users userId={user.id} users={user.name} />
        </div>
      ))}
    </div>
  );
}
export default UserData;
