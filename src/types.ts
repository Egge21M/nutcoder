export type ActiveItem = {
  type: "amount" | "secret" | "id" | "signature";
  data: string | number;
};
