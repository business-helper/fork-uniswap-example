const Factory = artifacts.require("UniswapV2Factory.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]);

  const factory = Factory.deployed();
  
  if (network === 'mainnet') {
    token1Address = '';
    token2Address = '';
  } else {
    
  }

  await factory.createPair();
};
