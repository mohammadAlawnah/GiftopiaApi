import { roles } from "../../middleware/auth.middleware.js";

export const endPoint = {
    add : [roles.Admin],
    display : [roles.Admin,roles.Staff,roles.GeneralUser],
    update : [roles.Admin],
    delete : [roles.Admin]
}