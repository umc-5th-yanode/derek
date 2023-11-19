// routes/store_route.js
import express from "express";
import asyncHandler from "express-async-handler";
import {
  storeAdd,
  reviewAdd,
  missionAdd,
} from "../controllers/store_controller.js";

export const storeRouter = express.Router();

storeRouter.post("/", asyncHandler(storeAdd));
storeRouter.post("/reviews", asyncHandler(reviewAdd));
storeRouter.post("/missions", asyncHandler(missionAdd));
