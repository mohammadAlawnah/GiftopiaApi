import { roles } from "../../middleware/auth.middleware.js";

export const endPoints = {
    create :[roles.Admin , roles.User],
    get : [roles.Admin,roles.User],
    active:[roles.User],
    delete:[roles.Admin],
}
