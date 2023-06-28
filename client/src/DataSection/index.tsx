import { useQuery } from "react-query";

type UsersCount = {
  count: number;
};

type UsersAge = { value: number };

type UserPopularName = {
  key: string;
  doc_count: number;
};

const fetchUsersCount = async () => {
  const response = await fetch("http://localhost:4000/users");
  return response.json();
};

const fetchUsersAge = async () => {
  const response = await fetch("http://localhost:4000/users/average-age");
  return response.json();
};

const fetchUsersPopularNames = async () => {
  const response = await fetch("http://localhost:4000/users/top-users-names");
  return response.json();
};

const DataSection = () => {
  const { data: usersCount } = useQuery<UsersCount>(
    "usersCount",
    fetchUsersCount
  );
  const { data: usersAge } = useQuery<UsersAge>("usersAge", fetchUsersAge);
  const { data: usersPopularNames } = useQuery<UserPopularName[]>(
    "usersNames",
    fetchUsersPopularNames
  );

  return (
    <>
      <p>
        An average age of all <span>{usersCount?.count}</span> users is:{" "}
        <span>{usersAge?.value}</span>
      </p>

      <h2>Most popular names:</h2>
      <ul>
        {usersPopularNames?.map((name, index) => (
          <li key={index}>
            {name.doc_count} {name.key}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DataSection;
