import {roles} from "../../middleware/auth.middleware.js"

//this code written by muawiya ismail-->
export const endPoints ={
    add:[roles.Admin,roles.Staff,roles.GeneralUser],
    display:[roles.Admin,roles.Staff,roles.GeneralUser],
    update:[roles.Admin,roles.Staff,roles.GeneralUser],
    delete:[roles.Admin,roles.Staff,roles.GeneralUser]
}//<--