const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));


app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/suppliers", require("./routes/suppliers"));
app.use("/api/stock", require("./routes/stock"));
app.use("/api/reports", require("./routes/reports"));


app.get("/", (req, res) => {
  res.send("Inventory Backend API is running!");
});


app.listen(5000, () => console.log("Server running on port 5000"));
