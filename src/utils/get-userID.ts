import { verify } from "jsonwebtoken";

const getUserID = (token: string) => {
  if (!token) {
    throw new Error("Unauthenticated");
  }

  const payload: any = verify(token, process.env.JWT_ACCESS_SECRET);
  return payload.id;
};
export default getUserID;
