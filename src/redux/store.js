import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combatReducer } from "./combat/combatSlice";
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

// const gamePersistConfig = {
//   key: "game",
//   storage,
//   whitelist: [
//     "currentDungeons",
//     "possibleDungeons",
//     "selectedDungeonId",
//     "dungeonLevels",
//     "playerLv",
//     "maxEqLv",
//     "spareLvUps",
//     "gold",
//     "allies",
//     "journey",
//   ],
// };

// const eqPersistConfig = {
//   key: "equipment",
//   storage,
//   whitelist: ["all"],
// };

// const dungeonPersistConfig = {
//   key: "dungeon",
//   storage,
//   whitelist: [
//     "inDungeon",
//     "quests",
//     "items",
//     "enemies",
//     "bosses",
//     "id",
//     "name",
//     "eventName",
//     "ally",
//     "player",
//     "background",
//     "lv",
//     "startedLv",
//     "goldEarned",
//     "currentSlot",
//     "slotsDefeated",
//     "selectedEnemyID",
//     "readyToEnter",
//     // "",
//   ],
//   // blacklist: ["inDungeon"],
// };

const combatPersistConfig = {
  key: "combat",
  storage,
  whitelist: [],
  // whitelist: ["isLoading", "pause", "endCombat", "timeline"],
};

// const enemyPersistConfig = {
//   key: "enemy",
//   storage,
//   whitelist: [
//     "name",
//     "id",
//     "life",
//     "maxLife",
//     "isBoss",
//     "gold",
//     "portrait",
//     "status",
//     "body",
//   ],
// };

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // contacts: contactsReducer,
    // combat: combatReducer,
    // dungeon: dungeonReducer,
    // enemy: enemyReducer,
    // filter: filterReducer,
    // auth: persistReducer(authPersistConfig, authReducer),
    // equipment: persistReducer(eqPersistConfig, equipmentReducer),
    combat: persistReducer(combatPersistConfig, combatReducer),
    // dungeon: persistReducer(dungeonPersistConfig, dungeonReducer),
    // game: persistReducer(gamePersistConfig, gameReducer),
    // enemy: persistReducer(enemyPersistConfig, enemyReducer),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
