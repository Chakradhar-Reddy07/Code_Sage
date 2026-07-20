require("dotenv").config();

const app = require("./app");
const db = require("./config/db");
const initTables = require("./config/dbInit");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await db.query("SELECT 1");

    console.log("MySQL Connected Successfully");

    await initTables();

    const server = app.listen(PORT);

    server.on("listening", () => {
      console.log(`Server running on port ${PORT}`);
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use`);
      } else {
        console.error("Server failed to start:", error.message);
      }

      process.exitCode = 1;
    });
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exitCode = 1;
  }
}

startServer();
