import { useEffect } from "react";
import { Avatar } from "../Avatar/Avatar";
import css from "./CombatPanel.module.css";
import { useDispatch } from "react-redux";
import { combatTick } from "../../redux/combat/operations";
import { CombatAvatar } from "../CombatAvatar/CombatAvatar";
export const CombatPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(combatTick());
  }, [dispatch]);

  return (
    <div className={css.panel}>
      {/* <CombatAvatar hero={1} />
       */}
      combat panel
    </div>
  );
};
