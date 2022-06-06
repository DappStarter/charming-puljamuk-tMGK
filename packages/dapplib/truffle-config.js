require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind attitude hockey fantasy forget tube'; 
let testAccounts = [
"0x424d53708051ed749fc590b7b0cae812aba46787a4d926e2a80de069e4e894f2",
"0x2ad47872b915b773b20e68fe7bfcff54aa48c2fedf5a3fcb5ae23778cdd2113b",
"0xb5566d7e966f77c302e511f80892adb0296119767fd507cb6300aa9358bbe230",
"0x540b11227803e8666c3e2a5b9579253c44f3ca5b46548d52fba93462b762b4b3",
"0x7b41108c94678d6e7e2b416b3c285119f7ff83fa52987ef9b6699080b2fe6acc",
"0x766b72d533e13974297474928804ea3bd920818495c98e614e7678c158f80473",
"0xe0e9b819300657fe0baf1caf1f0425d8896260d20505200fbda2dbf6431de24b",
"0x55608db128d903000a05106ae9983b9eee222416418c0594c44564872fd7ad66",
"0xddca92f371ea9c98701816a90ad43aef944e038e96f6f3c1ced276b26d17e8b8",
"0x80e9fbea40c93db60e1fab6065ae0fb7b7b3256c8aed16f0ec030acb3076ed27"
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

