export const feats = {
  str: {
    name: "TOUGH", //
    type: "str",
    3: { str: 2, agi: 1 },
    2: { str: 1, agi: 1, det: 1 },
    1: { str: 1, det: 1, cha: 1 },
  }, //red
  wis: {
    name: "CAUTIOUS", //
    type: "wis",
    3: { wis: 2, det: 1 },
    2: { wis: 1, det: 1, agi: 1 },
    1: { wis: 1, agi: 1, sta: 1 },
  }, //blue
  agi: {
    name: "TINY", //
    type: "agi",
    3: { agi: 2, cha: 1 },
    2: { agi: 1, cha: 1, sta: 1 },
    1: { agi: 1, sta: 1, str: 1 },
  }, //green
  cha: {
    name: "FRIENDLY", //
    type: "cha",
    3: { cha: 2, str: 1 },
    2: { cha: 1, str: 1, wis: 1 },
    1: { cha: 1, wis: 1, agi: 1 },
  }, //yellow
  det: {
    name: "SERIOUS", //
    type: "det",
    3: { det: 2, sta: 1 },
    2: { det: 1, sta: 1, cha: 1 },
    1: { det: 1, cha: 1, wis: 1 },
  }, //purple
  sta: {
    name: "CURIOUS", //
    type: "sta",
    3: { sta: 2, wis: 1 },
    2: { sta: 1, str: 1, wis: 1 },
    1: { sta: 1, str: 1, det: 1 },
  }, //orange
};
