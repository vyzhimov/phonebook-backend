const app = require("./app");
const mongoConnect = require("./db/connection");

const { PORT } = process.env;

const startServer = async () => {
  try {
    await mongoConnect();
    app.listen(PORT, (e) => {
      if (e) {
        console.log("Server launch error");
        return;
      }
      console.log(`Server running. Use our API at port: ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

startServer();
