import { feats } from "../templates/feats";
import { races } from "../templates/races";

export const getCompatibility = ({ hero, likes }) => {
  const race = hero.race.type;
  const feat = hero.feat.type;
  const sum = hero.sta + hero.str + hero.agi + hero.cha + hero.det + hero.wis;
  const good = (sum * 22) / 100;
  const featBonus = feats[feat][likes];
  const raceBonus = races[race][likes];
  const acceptedF = [...Object.keys(featBonus)].reduce((prev, feat) => {
    if (hero[feat] > good) return parseInt(featBonus[feat]) + prev;
    return prev;
  }, 0);
  const acceptedR = [...Object.keys(raceBonus)].reduce((prev, race) => {
    if (hero[race] > good) return parseInt(raceBonus[race]) + prev;
    return prev;
  }, 0);
  console.log(
    `likes[${likes}]${acceptedF} + ${acceptedR}=[${acceptedF + acceptedR}]`
  );
  return (100 * Math.max(0, acceptedF + acceptedR - 2)) / 3;
};
