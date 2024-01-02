import { walk } from "./walk";

export const skillJump = {
  ticks: 9,
  // animation: "skillJump 1.8s ease infinite", //forwards
  animation: "skillJump", //forwards
  next: () => {
    return walk;
  },
  keyframes: `@keyframes skillJump {
    0% {
      transform: translate3d(0, 0, 0);
    }
    30% {
      transform: translate3d(0, 8%, 0) scaleY(0.8) scaleX(1.2);
    }
    36% {
      transform: translate3d(0, 0, 0);
    }
    42% {
      transform: translate3d(0, -100%, 0);
    }
    46% {
      transform: translate3d(0, -110%, 10px) scale(-1, 1);
    }
    51% {
      transform: translate3d(0, -110%, -10px) scale(-1, -1);
    }
    65% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }`,
};
