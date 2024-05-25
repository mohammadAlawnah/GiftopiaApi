import  { roles }  from "../../middleware/admin.middleware";

export const endPoint = {

    add : [roles.Admin],
    update : [roles.Admin],
    delete : [roles.Admin]
}