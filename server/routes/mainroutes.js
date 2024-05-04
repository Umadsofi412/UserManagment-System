import express from "express";
const router = express.Router();


import coustomController from '../controller/controller.js'

const {homePage,add}  = coustomController;


router.get('/',homePage)
router.get('/getPage',add);
router.post('/add',add)

export default router;