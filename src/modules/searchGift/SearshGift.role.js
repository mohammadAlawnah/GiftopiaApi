import { roles } from "../../middleware/auth.middleware.js";

export const endPoint = {
    create : [roles.Admin,roles.GeneralUser],
    get : [roles.Admin,roles.GeneralUser],
}