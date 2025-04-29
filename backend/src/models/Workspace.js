import mongoose from 'mongoose';

const workspaceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Workspace title is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  image: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  }
}, {
  timestamps: true
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

export default Workspace;
