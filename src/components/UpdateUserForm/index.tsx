import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { User } from "../../hooks/useUsersQuery";
import { TextField } from "../shared/TextField";
import { FormButton } from "../shared/FormButton";
import styles from "./styles.module.scss";
import { updateUserSchema, type UpdateUserFormData } from "./schema";
import useUsersStore from "../../stores/useUsersStore";
import { usePopupStore } from "../../stores/popupStore";
import { SuccessSavingUserPopup } from "../popups/SuccessSavingUserPopup";

// Также не совсем понятно что делать с номерами, в задании было написано, что нужно только цифры,
// хотя номера с бекенда приходят совсем разные. Со скобками, с тире, с точками.

type Props = {
  user: User;
};

export const UpdateUserForm = ({ user }: Props) => {
  const updateUser = useUsersStore((state) => state.updateUser);

  const openPopup = usePopupStore((state) => state.openPopup);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UpdateUserFormData>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.city,
      phone: user.phone,
      companyName: user.companyName,
    },
  });

  const values = watch();

  const onSubmit = (data: UpdateUserFormData) => {
    openPopup(<SuccessSavingUserPopup />);
    updateUser(user.id, data);
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <TextField
          inputTitle="Имя"
          {...register("name")}
          value={values.name}
          initValue={user.name}
          error={errors.name?.message}
          handleReset={() => setValue("name", user.name)}
        />

        <TextField
          inputTitle="Никнейм"
          {...register("username")}
          value={values.username}
          initValue={user.username}
          error={errors.username?.message}
          handleReset={() => setValue("username", user.username)}
        />

        <TextField
          inputTitle="Почта"
          {...register("email")}
          value={values.email}
          initValue={user.email}
          error={errors.email?.message}
          handleReset={() => setValue("email", user.email)}
        />

        <TextField
          inputTitle="Город"
          {...register("city")}
          value={values.city}
          initValue={user.city}
          error={errors.city?.message}
          handleReset={() => setValue("city", user.city)}
        />

        <TextField
          inputTitle="Телефон"
          {...register("phone")}
          value={values.phone}
          initValue={user.phone}
          error={errors.phone?.message}
          handleReset={() => setValue("phone", user.phone)}
        />

        <TextField
          inputTitle="Название компании"
          {...register("companyName")}
          value={values.companyName}
          initValue={user.companyName}
          error={errors.companyName?.message}
          handleReset={() => setValue("companyName", user.companyName)}
        />
      </div>

      <div className={styles.submitBtnContainer}>
        <FormButton type="submit">Сохранить</FormButton>
      </div>
    </form>
  );
};
