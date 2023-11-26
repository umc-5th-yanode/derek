import { BaseError } from "../config/error.js";
import { status } from "../config/response_status.js";
import { signinDTO, addUserMissionDTO } from "../dtos/user_dto.js";
import {
  addUser,
  getUser,
  getUserPreferToUserID,
  setPrefer,
} from "../models/user_dao.js";

export const joinUser = async (body) => {
  const {
    name,
    gender,
    phoneNumber,
    email,
    birthYear,
    birthMonth,
    birthDay,
    address,
    specAddress,
    selectedCategory,
  } = body;

  const birth = new Date(birthYear, birthMonth, birthDay);

  const prefer = selectedCategory;

  const joinUserData = await addUser({
    email: email,
    name: name,
    gender: gender,
    birth: birth,
    address: address,
    specAddress: specAddress,
    phoneNumber: phoneNumber,
  });

  const NOTEXIST = -1;

  if (joinUserData == NOTEXIST) {
    throw new BaseError(status.EMAIL_ALREADY_EXIST);
  } else {
    for (let i = 0; i < prefer.length; i++) {
      await setPrefer(joinUserData, prefer[i]);
    }
    return signinResponseDTO(
      await getUser(joinUserData),
      await getUserPreferToUserID(joinUserData)
    );
  }
};

export const addUserMission = async (body) => {
  const addUserMissionData = await plusUserMission({
    member_id: body.member_id,
    mission_id: body.mission_id,
  });

  const NOTEXIST = -1;

  if (addUserMission == NOTEXIST) {
    throw new BaseError(status.STORE_NOT_EXIST);
  } else {
    return addUserMissionDTO(await getUserMission(addUserMissionData));
  }
};
