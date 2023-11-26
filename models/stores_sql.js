// models/store_sql.js

export const insertStoreSql =
  "INSERT INTO store (name, address, region_id) VALUES (?, ?, ?);";

export const getStoreID = "SELECT * FROM store WHERE id = ?;";

export const insertReviewToStore =
  "INSERT INTO review (body, score, member_id, store_id) VALUES (?,?,?,?);";

export const getReviewID = "SELECT * FROM review WHERE id = ?;";

export const confirmStore =
  "SELECT EXISTS(SELECT 1 FROM store WHERE id = ?) as isExistStore";

export const insertMissionSql =
  "INSERT INTO mission (store_id, reward, deadline, mission_spec) VALUES (?, ?, ?, ?);";

export const getMissionID = "SELECT * FROM mission WHERE id = ?;";
