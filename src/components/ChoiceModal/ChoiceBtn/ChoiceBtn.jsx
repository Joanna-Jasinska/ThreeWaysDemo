import css from "./ChoiceBtn.module.css";
// import logo from "../../../logo.svg";
import { Avatar } from "../../Avatar/Avatar";
import { partyTemplate } from "../../../data/templates/partyTemplate";
import { AvatarPercent } from "../../AvatarPercent/AvatarPercent";
import { getCompatibility } from "../../../data/hero/getCompatibility";
export const ChoiceBtn = () => {
  const random = () => Math.floor(Math.random() * 3) + 1;
  return (
    <div className={css.btn}>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {partyTemplate.map((hero) => {
        return (
          <AvatarPercent
            percent={getCompatibility({ hero, likes: random() })}
            avatar={<Avatar hero={hero.name} />}
          />
        );
      })}
      {/* choice */}
    </div>
  );
};
