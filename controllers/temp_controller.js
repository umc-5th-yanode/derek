// 요청이 오면 그에 대한 응답 전달
import { status } from "../config/response_status.js";
import { CheckFlag, getTempData } from "../services/temp_service.js";
import { response } from "../config/response.js";

export const tempTest = (req, res, next) => {
  console.log("/temp/test");
  res.send(response(status.SUCCESS, getTempData()));
};

export const tempException = (req, res, next) => {
  console.log("/temp/exception/" + req.params.flag);
  return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
};
