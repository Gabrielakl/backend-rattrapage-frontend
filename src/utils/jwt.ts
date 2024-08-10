import { jwtDecode } from "jwt-decode";

export const getDecodedToken = (token: string) => {
  return jwtDecode(token);
};
