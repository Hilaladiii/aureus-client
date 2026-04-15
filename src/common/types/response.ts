export type TResponseData<T> = Promise<{
  status: string;
  code: number;
  data: T;
}>;

export type TResponsePaginate<T> = Promise<{
  status: string;
  code: number;
  data: {
    items: T[];
    meta: {};
  };
}>;
