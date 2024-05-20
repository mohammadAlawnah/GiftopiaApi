//this code is implemented by Muawiya ismail
import {roles} from "../../middleware/auth.middleware.js"
export const endPoints ={
    create:[roles.GeneralUser],
    delete:[roles.GeneralUser]
}
//--> until this line is implemented by muawiya 