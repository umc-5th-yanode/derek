// models/user_sql.js

export const insertUserSql =
  "INSERT INTO member (name, gender, phone_number, email, birth, address, spec_address) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM member WHERE id = ?";

export const connectFoodCategory =
  "INSERT INTO member_prefer (category_id, member_id) VALUES (?, ?);";

export const confirmEmail =
  "SELECT EXISTS(SELECT 1 FROM member WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
  "SELECT member_prefer.id, member_prefer.member_id, member_prefer.category_id, food_category.name " +
  "FROM member_prefer JOIN food_category on member_prefer.category_id = food_category.id " +
  "WHERE member_prefer.member_id = ? ORDER BY food_category.name ASC;";

export const insertUserMissionSql =
  "INSERT INTO mission (member_id, mission_id) VALUES (?, ?);";

export const getUserMissionID = "SELECT * FROM member_mission WHERE id = ?;";

export const confirmMission =
  "SELECT EXISTS(SELECT 1 FROM member_mission WHERE id = ? AND mission_id = ?) as isExistMission";
