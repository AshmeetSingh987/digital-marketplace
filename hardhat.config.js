require("@nomiclabs/hardhat-waffle");
const fs = require("fs") ; 
const privateKey = fs.readFileSync(".secret").toString();
//For poligon 
const projectId =" 2a074dc4b72449d99e8c66a60fa9bc75";


module.exports = {
  networks:{
    hardhat:{
     chainId:1337
} , 
mumbai:{
  url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
   accounts :[privateKey]
} , 
mainnet:{
  url : `https://mainnet.infura.io/v3/${projectId}`,
  accounts :[privateKey]
}
  },
  solidity: "0.8.4",
};
