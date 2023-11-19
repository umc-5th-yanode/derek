import { response } from "../config/response.js";
import { status } from "../config/response_status.js";

import { addStore, addReview, addMission } from "../services/store_service.js";

export const storeAdd = async (req, res, next) => {
  console.log("가게 추가를 요청합니다");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await addStore(req.body)));
};

export const reviewAdd = async (req, res, next) => {
  console.log("가게 리뷰 추가를 요청합니다");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await addReview(req.body)));
};

export const missionAdd = async (req, res, next) => {
  console.log("가게 미션 추가를 요청합니다");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await addMission(req.body)));
};
