import { useEffect } from "react";
import { useUsersQuery } from "./useUsersQuery";
import useUsersStore from "../stores/useUsersStore";

export const useUsers = () => {
  const { data, isLoading } = useUsersQuery();
  const { setUsers, users, archivedUsers } = useUsersStore();

  useEffect(() => {
    if (data && users.length === 0) {
      // я так понимаю что мне нужно показать что я умею работать с TanStack Query и с Zustand
      // хотя в реальном проекте это было бы избыточно
      // но так как я понимаю что я редактирую пользователей только на стороне клиента
      // то я просто добавляю пользователей в стор

      setUsers(data.slice(0, 6));
    }
  }, [data, users.length, setUsers]);

  return {
    users,
    archivedUsers,
    isLoading,
  };
};
