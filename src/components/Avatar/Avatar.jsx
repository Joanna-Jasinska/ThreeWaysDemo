import { heroesTemplate } from "../../data/templates/heroesTemplate";
import { animations } from "../../data/animations";
import css from "./Avatar.module.css";
export const Avatar = ({ hero, animation, keyframes }) => {
  // const animations = { ...css2 };

  const myHero = heroesTemplate[hero];
  const { face, hat, bgColor } = myHero;
  const myStyle = {
    borderLeft: `0.5vw solid ${bgColor}`,
    borderBottom: `0.3vw solid ${bgColor}`,
    boxShadow: `inset 0.2vw -0.2vw 0.4vw 0.1vw ${bgColor}, inset 0 0 3px 0px #000000a8, 0.1vw 0.1vw 0.3vw 0 #000000`,
    // boxShadow: `inset 0 0 3px 0px #000000a8, 0.1vw 0.1vw 0.3vw 0 #000000`,
    // boxShadow: `inset 0.2vw -0.2vw 0.4vw 0.1vw ${bgColor}`,
    backgroundColor: bgColor,
    // animation: animation,
    // animation: `walk 1.2s ease infinite`,
  };
  return (
    // ${  animation ? css.animate : "" }
    <div
      className={`${css.avatar} ${css.ball} ${css.bubble}  ${animations[animation]}
      `}
      style={myStyle}
      // style={myStyle}
      // style={{ keyframes, ...myStyle, animation: animation }}
      // style={{ ...keyframes, ...animation, ...myStyle }}
    >
      <div className={css.face}>{face}</div>
      <div className={css.hat}>{hat}</div>
    </div>
  );
};
