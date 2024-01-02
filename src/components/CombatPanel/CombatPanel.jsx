import { useEffect } from "react";
import { Avatar } from "../Avatar/Avatar";
import css from "./CombatPanel.module.css";
import { useDispatch } from "react-redux";
import { combatTick } from "../../redux/combat/operations";
import { CombatAvatar } from "../CombatAvatar/CombatAvatar";
export const CombatPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(combatTick());
  }, [dispatch]);

  useEffect(() => {
    let interval = null;
    // if (true) {
    interval = setInterval(() => {
      // setSeconds(seconds => seconds + 1);
      dispatch(combatTick());
    }, 200);
    // }
    // else if (!isActive && seconds !== 0) {
    //   clearInterval(interval);
    // }
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.panel}>
      <CombatAvatar hero={1} />
      combat panel
    </div>
  );
};
