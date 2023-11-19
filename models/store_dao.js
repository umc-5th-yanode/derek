// models/store_dao.js

import { pool } from "../config/db_connect.js";
import { BaseError } from "../config/error.js";
import { status } from "../config/response_status.js";
import {
  insertStoreSql,
  getStoreID,
  insertReviewToStore,
  getReviewID,
  confirmStore,
  insertMissionSql,
  getMissionID,
} from "./store_sql.js";

export const plusStore = async (data) => {
  try {
    const conn = await pool.getConnection();

    const result = await pool.query(insertStoreSql, [
      data.name,
      data.address,
      data.region_id,
    ]);

    conn.release();
    return result[0].id;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getStore = async (userId) => {
  try {
    const conn = await pool.getConnection();
    const [store] = await pool.query(getStoreID, userId);

    console.log(store);

    if (user.length == 0) {
      return -1;
    }

    conn.release();
    return store;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const plusReview = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmStore, data.store_id);

    if (!confirm[0].isExistence) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertReviewToStore, [
      data.body,
      data.score,
      data.memeber_id,
      data.store_id,
    ]);

    conn.release();
    return result[0].id;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getReview = async (reviewId) => {
  try {
    const conn = await pool.getConnection();
    const [riview] = await pool.query(getReviewID, reviewId);

    console.log(riview);

    conn.release();
    return review;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const plusMission = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmStore, data.store_id);

    if (!confirm[0].isExistence) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertMissionSql, [
      data.store_id,
      data.reward,
      data.deadline,
      data.mission_spec,
    ]);

    conn.release();
    return result[0].id;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getMission = async (missionId) => {
  try {
    const conn = await pool.getConnection();
    const [mission] = await pool.query(getMissionID, missionId);

    console.log(riview);

    conn.release();
    return mission;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
