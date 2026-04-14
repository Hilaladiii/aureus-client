export type TRegisterRequest = {
  username: string;
  email: string;
  role: "BIDDER" | "SELLER";
  password: string;
};

export type TSignInRequest = {
  email: string;
  password: string;
};
