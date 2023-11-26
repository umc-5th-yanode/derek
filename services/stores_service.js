import { BaseError } from "../config/error.js";
import { status } from "../config/response_status.js";
import { signinResponseDTO } from "../dtos/user_dto.js";
import {
  addUser,
  getUser,
  getUserPreferToUserID,
  setPrefer,
} from "../models/user_dao.js";

export const addStore = async (body) => {
  const addStoreData = await plusStore({
    name: body.name,
    address: body.address,
    region_id: body.region_id,
  });

  // 추천
  // const temp = await getStore(addStoreData);
  // return addStoreDTO(temp);
  //

  return addStoreDTO(await getStore(addStoreData));
};

export const addReview = async (body) => {
  // 추천
  // const NO_STORE = -1;

  const addReviewData = await plusReview({
    body: body.body,
    score: body.score,
    member_id: body.member_id,
    store_id: body.store.id,
  });

  if (addReview == -1) {
    throw new BaseError(status.STORE_NOT_EXIST);
  } else return addReviewDTO(await getReview(addReviewData));
};

export const addMission = async (body) => {
  const addMissionData = await plusMission({
    store_id: body.store_id,
    reward: body.reward,
    deadline: body.deadline,
    misson_spec: body.misson_spec,
  });

  if (addMission == -1) {
    throw new BaseError(status.STORE_NOT_EXIST);
  } else return addMissionDTO(await getMission(addMissionData));
};
