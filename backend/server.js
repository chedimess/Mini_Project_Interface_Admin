const express = require("express");

const connectDB = require("./config/connectDB");

const app = express();

const categoryRouter = require("./routes/category");
const clientRouter = require("./routes/client");
const produitRouter = require("./routes/produit");

//middleWares
app.use(express.json());

//start the server
connectDB();

//routes
app.use("/api/category", categoryRouter);
app.use("/api/client", clientRouter);
app.use("/api/produit", produitRouter);

//lunch the Server
const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The Server is Running on port ${port}....`);
});