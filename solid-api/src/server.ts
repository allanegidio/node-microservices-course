import { app } from "./app";

const port = 8000;

app.listen(port, () => {
    console.log(`API Solid is running on port: ${port}.`);
});