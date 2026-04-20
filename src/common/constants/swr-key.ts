export const SWR_KEY = {
  AUTH: {
    SIGN_IN: "users/login",
    SIGN_OUT: "users/logout",
  },
  USER: {
    REGISTER: "users/register",
    ME: "users/me",
  },
  CATEGORY: {
    GET_ALL: "categories",
  },
  AUCTION: {
    CREATE: "auctions",
    MY_AUCTIONS: "auctions/seller",
    LIVE_AUCTION: "auctions",
    DETAIL: (id: string) => `auctions/${id}`,
    BID: (id: string) => `auctions/${id}/bid`,
    LEADERBOARD: (id: string) => `auctions/${id}/leaderboard/stream`,
  },
  WALLET: {
    GET_CURRENT_BALANCE: "wallets",
    ACTIVATE: "wallets/activate",
    TOP_UP: "wallets/top-up",
  },
};
