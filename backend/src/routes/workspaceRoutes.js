import express from 'express';
import { createWorkspace, getWorkspaces, getWorkspaceById, updateWorkspace, deleteWorkspace } from '../controllers/workspaceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getWorkspaces)
  .post(protect, createWorkspace);

router.route('/:id')
  .get(getWorkspaceById)
  .patch(protect, updateWorkspace)
  .delete(protect, deleteWorkspace);

export default router;
