import Workspace from '../models/Workspace.js';

export const createWorkspace = async (req, res) => {
  const { title, location, price, amenities, image } = req.body;
  const workspace = await Workspace.create({
    title, location, price, amenities, image, user: req.user.id
  });
  res.status(201).json(workspace);
};

export const getWorkspaces = async (req, res) => {
  const workspaces = await Workspace.find({});
  res.json(workspaces);
};

export const getWorkspaceById = async (req, res) => {
  const workspace = await Workspace.findById(req.params.id);
  if (workspace) {
    res.json(workspace);
  } else {
    res.status(404).json({ message: 'Workspace not found' });
  }
};

export const updateWorkspace = async (req, res) => {
  const workspace = await Workspace.findById(req.params.id);
  if (workspace) {
    if (workspace.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    workspace.title = req.body.title || workspace.title;
    workspace.location = req.body.location || workspace.location;
    workspace.price = req.body.price || workspace.price;
    workspace.amenities = req.body.amenities || workspace.amenities;
    workspace.image = req.body.image || workspace.image;
    await workspace.save();
    res.json(workspace);
  } else {
    res.status(404).json({ message: 'Workspace not found' });
  }
};

export const deleteWorkspace = async (req, res) => {
  const workspace = await Workspace.findById(req.params.id);
  if (workspace) {
    if (workspace.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    await workspace.remove();
    res.json({ message: 'Workspace removed' });
  } else {
    res.status(404).json({ message: 'Workspace not found' });
  }
};
