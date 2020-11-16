require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth meadow method hope knife borrow tennis'; 
let testAccounts = [
"0x8fa88e682c1059800adff5e5547e64839771859d25447fd588eea9d8321487a3",
"0xba31ccf108187e5488bde064d982cf95bf919d43ccb2659c1af6a55eb0299357",
"0xf91270752c259d1ec199be52a650c5aca8d6b009dfe085efd8615c584ca5480f",
"0x631e3bafa14eee91efcf56f22abaeff23c508257a5a5a4f7bdba5645d6a5d058",
"0x03738d271e25e5d5df3eaccee54b7d76adbbed24343cf78cc1ccbf83a2b556bc",
"0xa99d41e3b967ccc9c50fbed942a73d2b56a279f0eace4f0ae7533b7351f73846",
"0x6bea69b86caf61516bf87a2084ebf10fb6323482a36922b6c72d0225d80611aa",
"0x622b131005e47275bc771e5b29dd9b86b74ea673f48cae62321eb5e88e0c05a8",
"0x6aa1eb288a5eef3f99ce980cb7edcd59e58140a10e77df751f888803f4c77a23",
"0x0f4c99b210c8dea00e76cef5cf915c1409f4c24160d5655fd313bff8c34246c0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
