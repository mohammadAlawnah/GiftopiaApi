//this code is implemented by Muawiya ismail
import {roles} from "../../middleware/auth.middleware.js"
export const endPoints ={
    create:[roles.GeneralUser,roles.Admin,roles.Staff],
    delete:[roles.GeneralUser,roles.Admin,roles.Staff]
}
//--> until this line is implemented by muawiya 