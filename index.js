require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connect");
const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/user", userRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const port = process.env.PORT || 3000;
    //FOR EMULATOR OR SIMULATOR DEVICE ⬇️
    app.listen(port, () =>
      console.log(`HTTP server is running on port ${port}`)
    );

    //FOR PHYSICAL DEVICE ⬇️
    // app.listen(port, '0.0.0.0', () =>
    //   console.log(`HTTP server is running on port ${port}`)
    // );
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

start();
