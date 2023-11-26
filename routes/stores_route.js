// routes/store_route.js
import express from "express";
import asyncHandler from "express-async-handler";
import {
  storeAdd,
  reviewAdd,
  missionAdd,
} from "../controllers/stores_controller.js";

export const storesRouter = express.Router();

storesRouter.post("/", asyncHandler(storeAdd));
storesRouter.post("/reviews", asyncHandler(reviewAdd));
storesRouter.post("/missions", asyncHandler(missionAdd));
