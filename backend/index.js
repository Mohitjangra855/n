
require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const PORT = process.env.PORT || 3002;
const uri = "mongodb://127.0.0.1:27017/newDb";

const app = express();

app.use(cors({
  origin: `http://localhost:3000`,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

mongoose.connect(uri);
  console.log("DB started!");
app.listen(PORT, () => {
  console.log("App started!");
  
});

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});
