import express from "express";
const server = express();
const PORT = 8085;


 server.get('\', (req, res) => {
    res.status('200').json({message:"successfull"})
    res.end()
 })

 server.listen(PORT, () => {
  console.log(`server running on the port :`, PORT);
});
