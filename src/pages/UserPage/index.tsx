import { useParams } from "react-router";
import { useUsers } from "../../hooks/useUsers";
import { EditUserForm } from "../../components/EditUserForm";
import { Loader } from "../../components/svgs/Loader";
import styles from "./styles.module.scss";

export const UserPage = () => {
  const { id } = useParams();

  const { users, isLoading } = useUsers();

  if (isLoading)
    return (
      <div className={styles.main}>
        <Loader />
      </div>
    );
  if (!users.length) return <p>Пользователи не найдены</p>;

  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return <p>Пользовател не найден</p>;
  }

  return <EditUserForm user={user} />;
};
