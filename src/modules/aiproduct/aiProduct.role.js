import  { roles } from "../../middleware/admin.middleware.js";

export const endPoint = {
    create: [roles.Admin, roles.Staff],
    delete: [roles.Admin],
    update: [roles.Admin, roles.Staff]
}
