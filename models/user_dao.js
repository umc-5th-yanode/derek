// models/user.dao.js

import { pool } from "../config/db_connect.js";
import { BaseError } from "../config/error.js";
import { status } from "../config/response_status.js";
import {
  connectFoodCategory,
  confirmEmail,
  getUserID,
  insertUserSql,
  getPreferToUserID,
  confirmMission,
} from "./user_sql.js";

// User 데이터 삽입
export const addUser = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmEmail, data.email);

    if (confirm[0].isExistEmail) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertUserSql, [
      data.email,
      data.name,
      data.gender,
      data.birth,
      data.addr,
      data.specAddr,
      data.phone,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 사용자 정보 얻기
export const getUser = async (userId) => {
  try {
    const conn = await pool.getConnection();
    const [user] = await pool.query(getUserID, userId);

    console.log(user);

    if (user.length == 0) {
      return -1;
    }

    conn.release();
    return user;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 음식 선호 카테고리 매핑
export const setPrefer = async (userId, foodCategoryId) => {
  try {
    const conn = await pool.getConnection();

    await pool.query(connectFoodCategory, [foodCategoryId, userId]);

    conn.release();

    return;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 사용자 선호 카테고리 반환
export const getUserPreferToUserID = async (userID) => {
  try {
    const conn = await pool.getConnection();
    const prefer = await pool.query(getPreferToUserID, userID);

    conn.release();

    return prefer;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const plusUserMission = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmMission, data.mission_id);

    if (!confirm[0].isExistMission) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertUserMissionSql, [
      data.member_id,
      data.mission_id,
    ]);

    conn.release();
    return result[0].id;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getUserMission = async (missionId) => {
  try {
    const conn = await pool.getConnection();
    const result = await pool.query(getUserMissionID, missionId);

    console.log(riview);

    conn.release();
    return result;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
