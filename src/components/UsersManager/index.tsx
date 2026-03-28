import { useUsers } from "../../hooks/useUsers";
import { Line } from "../Line";
import { UserCard } from "../UserCard";
import styles from "./styles.module.scss";

export const UsersManager = () => {
  const { users, isLoading, archivedUsers } = useUsers();

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div>
      <div>
        <p className={styles.activeTitle}>Активные</p>
        <Line />
        <div className={styles.usersContainer}>
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </div>

      {archivedUsers.length > 0 && (
        <div>
          <p className={styles.archiveTitle}>Архив</p>
          <Line />
          <div className={styles.usersContainer}>
            {archivedUsers.map((user) => (
              <UserCard user={user} key={user.id} isArchive />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
