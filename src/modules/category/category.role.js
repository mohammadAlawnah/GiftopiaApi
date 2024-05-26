import { roles } from "../../middleware/auth.middleware.js";

//this code written by muawiya ismail-->
export const endPoints = {
    create : [roles.Admin],
    get : [roles.Admin,roles.Staff,roles.GeneralUser],
    update : [roles.Admin],
    destroy : [roles.Admin]
}//<--

