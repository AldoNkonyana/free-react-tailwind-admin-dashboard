import type { Driver, Ride, User } from "@prisma/client";

/*
 * extend the default Request interface
 * to include a user and ride object
 */
declare global {
  namespace Express {
    export interface Request {
      user?: User;
      driver?: Driver;
      ride?: Ride;
    }
  }
}
