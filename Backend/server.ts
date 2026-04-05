import "dotenv/config";
import { app } from "./src/app.js";
import { connectDB } from "./src/config/database.js";

const PORT: string | number = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is starting on PORT : ${PORT}`);
    });
  } catch (error) {
    console.log("Error in starting server !", error);
  }
}

startServer();
