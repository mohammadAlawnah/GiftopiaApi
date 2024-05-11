import { roles } from "../../middleware/auth.middleware.js";

export const endPoint = {
    create : [roles.Admin],
    get : [roles.Admin,roles.Staff,roles.GeneralUser],
    update : [roles.Admin],
    destroy : [roles.Admin]
}