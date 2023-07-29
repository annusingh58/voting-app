import express from "express";
import { registerchk, votingpagechk } from "../middleware/auth.js";
import { login, register } from "../controllers/usercontroller.js";
import { adminlogin, getadmin, voting } from "../controllers/votercontroller.js";
// import router from "../route/userroutes.js";

const router =express.Router();

router.post('/registerchk',registerchk);
router.post('/register',registerchk,register);
router.post('/login',login);
router.post('/votingpagechk',votingpagechk);
router.post('/voting',voting);
router.post('/adminlogin',adminlogin);
router.get('/getadmin',getadmin)








export default router;