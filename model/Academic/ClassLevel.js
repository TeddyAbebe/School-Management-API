const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ClassLevelSchema = new Schema(
  {
    // Level 100/200/300/400
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },

    // Students will be added to the class level when they are registered
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],

    // Optional.
    subjects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],
    teachers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
  },
  { timestamps: true }
);

const ClassLevel = model("ClassLevel", ClassLevelSchema);

module.exports = ClassLevel;
