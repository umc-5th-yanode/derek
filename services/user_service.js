import { BaseError } from "../config/error.js";
import { status } from "../config/response_status.js";
import { signinResponseDTO, addUserMissionDTO } from "../dtos/user_dto.js";
import {
  addUser,
  getUser,
  getUserPreferToUserID,
  setPrefer,
} from "../models/user_dao.js";

export const joinUser = async (body) => {
  const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
  const prefer = body.prefer;

  const joinUserData = await addUser({
    email: body.email,
    name: body.name,
    gender: body.gender,
    birth: birth,
    addr: body.addr,
    specAddr: body.specAddr,
    phone: body.phone,
  });

  if (joinUserData == -1) {
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

  if (addUserMission == -1) {
    throw new BaseError(status.STORE_NOT_EXIST);
  } else return addUserMissionDTO(await getUserMission(addUserMissionData));
};
