const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    yarn: {
      type: Schema.Types.ObjectId,
      ref: "Yarn",
    }
  },
  {
    timestamps: true,
  }
);

const colorSchema = new Schema(
  {
    color: String,
    yarn: {
      type: Schema.Types.ObjectId,
      ref: "Yarn",
    }
  }
)

const yarnSchema = new Schema(
  {
    title: String,
    composition: String,
    parameters: String,
    img: String,
    price: Number,
    inStock: Boolean,
    colors: [colorSchema],
    reviews: [reviewSchema],
  }, {
    timestamps: true
  }
);


module.exports = mongoose.model("Yarn", yarnSchema);