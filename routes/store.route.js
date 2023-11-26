// src/routes/store.route.js
import express from "express";
import asyncHandler from "express-async-handler";

export const storeRouter = express.Router({ mergeParams: true });

storeRouter.get("/reviews", asyncHandler(reviewPreview));
