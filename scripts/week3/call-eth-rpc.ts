const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

axios
  .post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBlockByNumber",
    params: [
      "0xb443", // block 46147
      true, // retrieve the full transaction object in transactions array
    ],
  })
  .then((res: any) => {
    console.log(res.data.result);
  });
