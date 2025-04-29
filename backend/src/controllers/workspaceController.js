import Workspace from '../models/Workspace.js';

export const createWorkspace = async (req, res) => {
  const workspace = new Workspace({ ...req.body, user: req.user._id });
  const created = await workspace.save();
  res.status(201).json(created);
};

export const getWorkspaces = async (req, res) => {
  const workspaces = await Workspace.find();
  res.json(workspaces);
};

export const getWorkspaceById = async (req, res) => {
  const workspace = await Workspace.findById(req.params.id);
  if (workspace) {
    res.json(workspace);
  } else {
    res.status(404);
    throw new Error('Workspace not found');
  }
};

export const updateWorkspace = async (req, res) => {
  const workspace = await Workspace.findById(req.params.id);

  if (workspace) {
    workspace.title = req.body.title || workspace.title;
    workspace.location = req.body.location || workspace.location;
    workspace.price = req.body.price || workspace.price;
    workspace.image = req.body.image || workspace.image;
    const updated = await workspace.save();
    res.json(updated);
  } else {
    res.status(404);
    throw new Error('Workspace not found');
  }
};

export const deleteWorkspace = async (req, res) => {
  const workspace = await Workspace.findById(req.params.id);

  if (workspace) {
    await workspace.remove();
    res.json({ message: 'Workspace removed' });
  } else {
    res.status(404);
    throw new Error('Workspace not found');
  }
};
