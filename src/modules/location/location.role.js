import  { roles }  from "../../middleware/auth.middleware.js";

export const endPoint = {

    add : [roles.GeneralUser],
    display : [roles.Admin,roles.Staff,roles.GeneralUser],
    update : [roles.GeneralUser]

}