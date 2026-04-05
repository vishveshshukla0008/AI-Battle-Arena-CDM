import "dotenv/config";
import { app } from "./src/app.js";
import config from "./src/config/config.js";

const PORT: string | number = process.env.PORT || 3000;

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is starting on PORT : ${PORT}`);
    });
  } catch (error) {}
}

startServer();
