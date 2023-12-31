import { useSelector } from "react-redux";
import { Avatar } from "../Avatar/Avatar";
import css from "./CombatAvatar.module.css";
import { selectTimeline } from "../../redux/combat/selectors";
export const CombatAvatar = ({ hero }) => {
  const timeline = useSelector(selectTimeline);
  const actionInstance = timeline.find((ins) => {
    return ins.hero === hero;
  });
  const animation = actionInstance ? actionInstance.css.animation : null;
  const keyframes = actionInstance ? actionInstance.css.keyframes : null;
  return (
    <div className={css.avatar}>
      <Avatar hero="Ruby" animation={true} />
    </div>
  );
};
