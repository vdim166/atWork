import { useEffect } from "react";
import { useUsersQuery } from "./useUsersQuery";
import useUsersStore from "../stores/useUsersStore";

export const useUsers = () => {
  const { data, isLoading, error } = useUsersQuery();
  const { setUsers, users, archivedUsers } = useUsersStore();

  useEffect(() => {
    if (data && data.length > 0) {
      setUsers(data);
    }
  }, [data, setUsers]);

  return {
    users,
    archivedUsers,
    isLoading,
    error,
  };
};
