import { useParams } from "react-router";

export const UserPage = () => {
  const { id } = useParams();

  return <div>UserPage</div>;
};
