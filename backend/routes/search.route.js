import express from "express"
import { getSearchHistory, removeItemFromSearchHistory, searchMovie, searchTv } from "../controllers/search.controllers.js"



const router = express.Router()

router.get("/person/:query",searchMovie)

router.get("/movie/:query",searchMovie)

router.get("/tv/:query",searchTv)

router.get("/history",getSearchHistory)

router.delete("/history/:id",removeItemFromSearchHistory)

export default router