import { response } from "../config/response.js";
import { status } from "../config/response_status.js";

import { joinUser } from "../services/user_service.js";

export const userSignin = async (req, res, next) => {
  // test
  console.log("회원가입 요청");
  console.log("body:", req.body);

  res.send(response(status.SUCCESS, await joinUser(req.body)));
};

export const userMissionAdd = async (req, res, next) => {
  console.log("가게 미션을 도전 중인 미션에 추가합니다");
  console.log("body:", req.body);

  res.send(response(status.SUCCESS, await addUserMission(req.body)));
};
