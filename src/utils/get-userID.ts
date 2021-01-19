import { verify } from "jsonwebtoken";

const getUserID = (token: string) => {
  try {
    const payload: any = verify(token, process.env.JWT_ACCESS_SECRET);
    return payload.id;
  } catch {
    return null;
  }
};
export default getUserID;
