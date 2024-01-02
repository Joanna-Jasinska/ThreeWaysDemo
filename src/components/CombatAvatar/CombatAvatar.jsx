import { useSelector } from "react-redux";
import { Avatar } from "../Avatar/Avatar";
import css from "./CombatAvatar.module.css";
import { selectTimeline } from "../../redux/combat/selectors";
export const CombatAvatar = ({ hero }) => {
  const timeline = useSelector(selectTimeline);
  const actionInstance = timeline.find((ins) => {
    console.log(`ins.hero =${ins.hero}, timeline:`, timeline);
    return ins.hero == 1;
  });
  console.log(`actionInstance.css:`, actionInstance.css);
  console.log(`actionInstance:`, actionInstance);
  const animation = actionInstance ? actionInstance.css.animation : null;
  const keyframes = actionInstance ? actionInstance.css.keyframes : null;
  console.log(`animation:`, animation);
  console.log(`keyframes:`, keyframes);
  return (
    <div className={css.avatar}>
      {/* {timeline[0].hero} */}
      <br />
      {/* {`actionInstance[${actionInstance}]`} */}
      {/* {`css[${actionInstance.css}]`} */}
      {`[${animation}][${actionInstance.ticks}]`}
      {/* {`${keyframes}`} */}
      <br />
      <Avatar hero="Ruby" animation={animation} keyframes={keyframes} />
    </div>
  );
};
