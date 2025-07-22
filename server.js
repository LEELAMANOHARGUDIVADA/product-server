import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import { connectDB } from "./db/connectdb.js";
import productRoutes from "./routes/ProductRoutes.js"

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use('/api/product', productRoutes);

app.get('/', (req, res) => {
    res.send('SERVER IS UP AND RUNNING');
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    connectDB()
    console.log("SERVER RUNNING ON PORT", PORT);
});