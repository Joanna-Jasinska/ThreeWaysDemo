import css from "./AvatarPercent.module.css";
export const AvatarPercent = ({ percent, avatar }) => {
  return (
    // <div className={css.container}>
    //   <div
    //     className={css.restriction}
    //     style={{
    //       left: `-${percent * 0.87}%`,
    //       top: `-${percent / 2}%`,
    //     }}
    //   >
    //     <div
    //       className={css.shifted}
    //       style={{
    //         left: `${percent * 0.87}%`,
    //         top: `${percent / 2}%`,
    //       }}
    //     >
    //       {avatar}
    //     </div>
    //   </div>

    //   <div className={css.percent}></div>
    // </div>
    <div className={css.container}>
      {avatar}
      <div
        className={css.percent}
        style={{ left: `${percent}%`, top: `${percent / 2}%` }}
        // style={{ left: `${percent * 0.87}%`, top: `${percent / 2}%` }}
      ></div>
    </div>
  );
};
