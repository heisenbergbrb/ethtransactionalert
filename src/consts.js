/**
  * Channel name where the bot will listen to the message
  */
export const CHANNEL_NAME = 'manage-wallets'

/**
 * Channel id where the bot will send the alert to
 */
export const ALERTS_CHANNEL_ID = '838310909238837278'

/**
  * Allowed Roles
  */
export const ROLES = [
  'Owner',
  'CryptoLads'
]

/**
  * Command prefix
  */
export const PREFIX = "$";

/**
 * Add wallet constants
 */
export const ADD_WALLET = 'add-wallet'

/**
 * Delete wallet constants 
 */
export const DEL_WALLET = 'delete-wallet'

/**
 * Name constants 
 */
 export const NAME = 'name'

/**
  * List of commands
  */
export const COMMANDS = [
  ADD_WALLET,
  DEL_WALLET,
  NAME
]

/**
 * Time interval between every wallet scan
 */
export const INTERVAL_TIME_MS = 300000

/**
 * List of response messages
 */
export const MESSAGES = {
  noWallet: "Please provide an ethereum wallet address",
  noPermission: "You don't have the permission to run this command.",
  invAddress: 'Invalid address format',
  invCommand: "Invalid command!",
  succAddWallet: 'Successfully added wallet! Authorized members will get an alert for new transaction of this wallet.' ,
  failAddWallet: 'Failed to add wallet! Please try again later.',
  walletAlreadyExist: 'Wallet address already exist!',
  errorGetWallets: 'Error occured on getting wallet data.',
  walletNotFound: 'Wallet is not yet added.',
  succDelWallet: 'Successfully deleted wallet.',
  failDelWallet: 'Failed to delete wallet! Please try again later.'
}
 
 