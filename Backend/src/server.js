import { config } from './config/dotenv.js';
import app from './app.js';
import connectDB from './config/db.js';

connectDB();

app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));