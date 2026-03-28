import { useQuery } from "@tanstack/react-query";

const FETCH_USERS_API = "https://jsonplaceholder.typicode.com/users";
export const AVATAR_URL =
  "https://c.pxhere.com/photos/2f/35/vancouver_opened09-230597.jpg!d";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  phone: string;
  companyName: string;
  avatar: string;
}

export interface userFromApi {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  company: {
    name: string;
  };
}

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User[]> => {
      const res = await fetch(FETCH_USERS_API);
      if (!res.ok) throw new Error("Failed to fetch users");

      const data = await res.json();
      const result = data.map(
        (userFromApi: userFromApi): User => ({
          id: userFromApi.id,
          name: userFromApi.name,
          username: userFromApi.username,
          email: userFromApi.email,
          city: userFromApi.address.city,
          phone: userFromApi.phone,
          companyName: userFromApi.company.name,
          avatar: AVATAR_URL,
        }),
      );

      return result;
    },
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
