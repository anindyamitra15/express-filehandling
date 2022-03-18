import express from 'express';
import FileHandleController from '../controllers/filehandle.controller.js';

const FileHandleRouter = express.Router();

FileHandleRouter.get('/', FileHandleController.Root);
FileHandleRouter.post('/upload', FileHandleController.FileUpload);

export default FileHandleRouter;