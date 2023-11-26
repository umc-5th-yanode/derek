// routes/review.route.js
import express from "express";
import asyncHandler from "express-async-handler";
import { reviewPreview } from "../controllers/review.controller";

export const reviewRouter = express.Router({ mergeParams: true });

storesRouter.post("/", asyncHandler(reviewPreview));
