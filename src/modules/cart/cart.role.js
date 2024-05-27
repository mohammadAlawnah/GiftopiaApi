import {roles} from "../../middleware/auth.middleware.js"

//this code written by muawiya ismail-->
export const endPoints ={
    create:[roles.GeneralUser,roles.Admin],
    delete:[roles.GeneralUser,,roles.Admin]
}//<--
