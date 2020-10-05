require('dotenv').config();

module.exports = {
  /**
   * Returns the default Sbercoin.com address.
   * @return {String} Default Sbercoin.com address.
   */
  getDefaultSbercoinAddress: () => {
    if (!process.env.SENDER_ADDRESS) {
      throw Error('Must have SENDER_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.SENDER_ADDRESS));
  },

  /**
   * Returns the Sbercoin.com network RPC url.
   * @return {String} The Sbercoin.com network RPC url.
   */
  getSbercoinRPCAddress: () => {
    if (!process.env.Sbercoin_RPC_ADDRESS) {
      throw Error('Must have Sbercoin_RPC_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.Sbercoin_RPC_ADDRESS));
  },

  /**
   * Returns the wallet passphrase to unlock the encrypted wallet.
   * @return {String} The wallet passphrase.
   */
  getWalletPassphrase: () => (process.env.WALLET_PASSPHRASE ? String(Buffer.from(process.env.WALLET_PASSPHRASE)) : ''),

  isWalletEncrypted: async (sweb3) => {
    const res = await sweb3.getWalletInfo();
    return Object.prototype.hasOwnProperty.call(res, 'unlocked_until');
  },
};
