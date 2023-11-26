// review.controller.js
import { response } from "../config/response.js";
import { status } from "../config/response_status.js";
import { getReview } from "../providers/myReview.provider.js";

export const reviewPreview = async (req, res, next) => {
  return res.send(
    response(status.SUCCESS, await getReview(req.params.storeId, req.query))
  );
};
