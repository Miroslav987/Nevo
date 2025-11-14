"use client";

import { FC } from "react";
import Icon from "../Icon/Icon";
import styles from "./BookCallButton.module.scss";
import { useModal } from "@shared/context/ModalProvider";
import ContactForm from "@entities/ContactForm/ContactForm";
import AppButton from "../AppButton";

export type BookCallButtonProps = {
  
};

const BookCallButton: FC<BookCallButtonProps> = ({ ...props }) => {
  const {openModal} = useModal()
  return (
    <AppButton onClick={()=>openModal(<ContactForm/>)} className={styles.bookCallButton} {...props}>
      <Icon name="phone" />
      Забронировать звонок
    </AppButton>
  );
};

export default BookCallButton;