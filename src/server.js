import dotenv from "dotenv";
import { connectdb } from "./config/db.js";
import app from "./app.js";

dotenv.config();

connectdb();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    
})