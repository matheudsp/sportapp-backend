import { Router } from 'express';
import multer from 'multer';


//middleware
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer'

//user
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

//company 
import { CreateCompanyController } from './controllers/company/CreateCompanyController';
import { DetailCompanyController } from './controllers/company/DetailCompanyController';

//court
import { CreateCourtController } from './controllers/court/CreateCourtController';
import { DetailCourtController } from './controllers/court/DetailCourtController';
import { ListCourtController } from './controllers/court/ListCourtController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- USER ROUTES --
router.post('/createaccount', new CreateUserController().handle)

router.post('/login', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailUserController().handle )

//-- COMPANY ROUTES --

router.post('/createcompany', isAuthenticated, new CreateCompanyController().handle)

router.post('/company', isAuthenticated,  new DetailCompanyController().handle )

router.get('/companies', isAuthenticated,  new DetailCompanyController().handle )

//-- COURT ROUTES --
router.post('/createcourt', isAuthenticated, new CreateCourtController().handle)

router.post('/court', isAuthenticated, new DetailCourtController().handle)

router.post('/courts', isAuthenticated, new ListCourtController().handle)

//-- BOOKING ROUTES --



export { router }; 