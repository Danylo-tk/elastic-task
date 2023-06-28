import { useEffect, useState } from "react";
import styles from "./DataSection.module.css";
import { UserPopularName, UsersAge, UsersCount } from "../types";

const DataSection = () => {
  const [usersCount, setUsersCount] = useState<UsersCount>();
  const [usersAge, setUsersAge] = useState<UsersAge>();
  const [usersPopularNames, setUsersPopularNames] =
    useState<UserPopularName[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countResponse, ageResponse, popularNamesResponse] =
          await Promise.all([
            fetch("http://localhost:4000/users"),
            fetch("http://localhost:4000/users/average-age"),
            fetch("http://localhost:4000/users/top-users-names"),
          ]);

        const countData = await countResponse.json();
        const ageData = await ageResponse.json();
        const popularNamesData = await popularNamesResponse.json();

        setUsersCount(countData);
        setUsersAge(ageData);
        setUsersPopularNames(popularNamesData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [usersCount]);

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        An average age of all{" "}
        <span className={styles.boldText}>{usersCount?.count}</span> users is:{" "}
        <span className={styles.boldText}>
          {Math.floor(usersAge?.value ?? 0)}
        </span>{" "}
        years.
      </p>

      <div style={{ height: "2rem" }}></div>

      <h2 className={styles.boldText}>Most popular names:</h2>

      <ul className={styles.namesList}>
        {usersPopularNames?.map((name, index) => (
          <li key={index} className={styles.text}>
            {name.doc_count} {name.key}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataSection;
