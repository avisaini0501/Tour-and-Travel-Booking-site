import express from "express";
import { createTour, getSingleTour, updateTour, deleteTour, getAllTours, getTourBySearch, getFeaturedTours, getTourCount } from "./../controllers/tourController.js";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";
//create new tour
router.post("/",verifyAdmin , createTour);

router.put("/:id", verifyAdmin , updateTour);

router.delete("/:id",verifyAdmin , deleteTour);

router.get("/:id" , getSingleTour);

router.get("/" , getAllTours);

router.get("/search/getTourBySearch" , getTourBySearch);
router.get("/search/getFeaturedTours" , getFeaturedTours);
router.get("/search/getTourCount" , getTourCount);

export default router;