import { AVATAR_URL, type User } from "../../hooks/useUsersQuery";
import { Line } from "../Line";
import { ProfileData } from "../ProfileData";
import { ArrowLeftBtn } from "../shared/ArrowLeftBtn";
import { UpdateUserForm } from "../UpdateUserForm";

import styles from "./styles.module.scss";

type EditUserFormProps = {
  user: User;
};

export const EditUserForm = ({ user }: EditUserFormProps) => {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.backBtnContainer}>
          <ArrowLeftBtn to="/" />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.imageContainer}>
            <img src={AVATAR_URL} alt="avatar" className={styles.userImage} />
            <ProfileData />
          </div>

          <div className={styles.userInfoContainer}>
            <p className={styles.titleDataProfile2}>Данные профиля</p>
            <Line />

            <div className={styles.updateUserForm}>
              <UpdateUserForm user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
