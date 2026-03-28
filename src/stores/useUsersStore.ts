import { create } from "zustand";
import type { User } from "../hooks/useUsersQuery";

interface UsersState {
  users: User[];
  setUsers: (users: User[]) => void;
  deleteUser: (id: number) => void;

  archiveUser: (id: number) => void;
  unarchiveUser: (id: number) => void;

  archivedUsers: User[];
}

const useUsersStore = create<UsersState>((set) => ({
  users: [],
  archivedUsers: [],

  setUsers: (users) => set({ users }),

  archiveUser: (id: number) =>
    set((state) => {
      const userToArchive = state.users.find((user) => user.id === id);
      if (!userToArchive) return state;

      return {
        users: state.users.filter((user) => user.id !== id),
        archivedUsers: [...state.archivedUsers, userToArchive],
      };
    }),

  unarchiveUser: (id: number) =>
    set((state) => {
      const userToUnarchive = state.archivedUsers.find(
        (user) => user.id === id,
      );
      if (!userToUnarchive) return state;

      return {
        users: [...state.users, userToUnarchive],
        archivedUsers: state.archivedUsers.filter((user) => user.id !== id),
      };
    }),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));

export default useUsersStore;
