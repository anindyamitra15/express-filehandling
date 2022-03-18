import express from 'express';
import MainController from '../controllers/main.controller.js';

const MainRouter = express.Router();

MainRouter.get('/', MainController.Root);

export default MainRouter;