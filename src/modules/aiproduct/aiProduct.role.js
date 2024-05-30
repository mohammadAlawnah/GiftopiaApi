// This code is written by Reema Kusa
import  { roles }  from "../../middleware/auth.middleware.js";

export const endPoint = {
    create: [roles.Admin, roles.Staff],
    delete: [roles.Admin],
    update: [roles.Admin, roles.Staff]
}
