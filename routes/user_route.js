// routes/user_route.js
import express from "express";
import asyncHandler from "express-async-handler";

import { userSignin, userMissionAdd } from "../controllers/user_controller.js";

export const userRouter = express.Router();

userRouter.post("/signin", asyncHandler(userSignin));
userRouter.post("/missions", asyncHandler(userMissionAdd));
