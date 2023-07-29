import express from "express";
import { registerchk, votingpagechk } from "../middleware/auth.js";
import { login, register } from "../controllers/usercontroller.js";
import { adminlogin, countvotes, voting } from "../controllers/votercontroller.js";
import Admin from "../model/admin.js";
import { CronJob } from "cron";

let job=new CronJob('0 */10 * * * ',async()=>{
    console.log("working....");
    const admin=new Admin({
        email:"admin",
        password:"admin"
    });
    await admin.save();


});
// job.start();

const router =express.Router();

router.post('/registerchk',registerchk);
router.post('/register',registerchk,register);
router.post('/login',login);
router.post('/votingpagechk',votingpagechk);
router.post('/voting',voting);
router.post('/adminlogin',adminlogin);
router.get('/countvotes',countvotes);
// router.get('/getadmin',getadmin)








export default router;