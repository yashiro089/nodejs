const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema(
  {
    description: {
      type: String
    },
    completed: {
      type: Boolean,
      default: false
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

TaskSchema.pre('save', async function(next) {
  console.log('Task: just before saving ');

  next();
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
