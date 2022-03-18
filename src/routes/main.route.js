import express from 'express';
import { Root } from '../controllers/main.controller.js';

const MainRouter = express.Router();

MainRouter.get('/', Root);

export default MainRouter;