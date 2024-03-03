const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
  description: String,
  // dueDate: Date,
  // completed: { type: Boolean, default: false },
  userId: { type: Schema.Types.ObjectId, ref: "user" },
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
// module.exports = mongoose.model("Task", TaskSchema);
