import express from "express";
import { tempRouter } from "../umc_test/routes/temp_route.js";
import { response } from "./config/response.js";
import { BaseError } from "./config/error.js";
import { status } from "./config/response_status.js";

const app = express();
const port = 3000;

// router setting
app.use("/temp", tempRouter);

app.use((req, res, next) => {
  const err = new BaseError(status.NOT_FOUND);
  next(err);
});

// error handling
app.use((err, req, res, next) => {
  // 템플릿 엔진 변수 설정
  res.locals.message = err.message;
  // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
