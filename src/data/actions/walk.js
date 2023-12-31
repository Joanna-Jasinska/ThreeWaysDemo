import { skillJump } from "./skillJump";

export const walk = {
  ticks: 20,
  next: () => {
    return skillJump;
  },
  animation: "walk 1.2s ease infinite", //forwards
  keyframes: `@keyframes walk {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    25% {
      transform: translate3d(0, 4%, 0) scaleY(0.9) scaleX(1.04) rotate(2deg);
    }
    50% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    75% {
      transform: translate3d(0, 4%, 0) scaleY(0.9) scaleX(1.04) rotate(-2deg);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }`,
};
