import { useEffect, useRef, useState } from "react";
import type { User } from "../../hooks/useUsersQuery";
import { BurgerMenu } from "../svgs/BurgerMenu";
import styles from "./styles.module.scss";
import useUsersStore from "../../stores/useUsersStore";
import { useNavigate } from "react-router";

type UserCardProps = {
  user: User;
  isArchive?: boolean;
};

export const UserCard = ({ user, isArchive = false }: UserCardProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const nav = useNavigate();

  const archiveUser = useUsersStore((state) => state.archiveUser);
  const unarchiveUser = useUsersStore((state) => state.unarchiveUser);

  const deleteUser = useUsersStore((state) => state.deleteUser);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const goToCard = (id: number) => {
    nav(`/user/${id}`);
  };

  return (
    <div className={styles.card}>
      <img
        src={user.avatar}
        alt={user.name}
        className={`${styles.userImage} ${isArchive ? styles.archivedImage : ""}`}
      />
      <div className={styles.infoContainer}>
        <div className={styles.firstLine}>
          <p
            className={`${styles.userName} ${isArchive ? styles.archived : ""}`}
          >
            {user.name}
          </p>
          <div className={styles.menuContainer} ref={dropdownRef}>
            <div onClick={toggleDropdown} className={styles.burgerButton}>
              <BurgerMenu />
            </div>

            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {!isArchive ? (
                  <>
                    <button onClick={() => goToCard(user.id)}>
                      Редактировать
                    </button>
                    <button onClick={() => archiveUser(user.id)}>
                      Архивировать
                    </button>
                    <button onClick={() => deleteUser(user.id)}>Скрыть</button>
                  </>
                ) : (
                  <button onClick={() => unarchiveUser(user.id)}>
                    Активировать
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <p
          className={`${styles.companyName} ${isArchive ? styles.archived : ""}`}
        >
          {user.companyName}
        </p>
        <p className={`${styles.city}  ${isArchive ? styles.archived : ""}`}>
          {user.city}
        </p>
      </div>
    </div>
  );
};
