import css from "./ChoiceModal.module.css";
import { ChoiceBtn } from "./ChoiceBtn/ChoiceBtn";
export const ChoiceModal = () => {
  return (
    <div className={css.modal}>
      <ChoiceBtn />
      <ChoiceBtn />
      <ChoiceBtn />
    </div>
  );
};
