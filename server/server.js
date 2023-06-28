require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const app = express();
const PORT = process.env.PORT || 4500;
const appRoutes = require("./routes/users");

app.use(cors(corsOptions));

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/", appRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
