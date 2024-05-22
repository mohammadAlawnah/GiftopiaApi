import { roles } from "../../middleware/auth.middleware.js";

export const endPoint = {
    create : [roles.Admin],
    //this code is implemented by Muawiya ismail -->
    get : [roles.Admin,roles.Staff,roles.GeneralUser]
    //--<
}