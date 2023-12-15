import { AVAILABLE, EDIT_DATA, MISSING, MISSING_URGENT } from "./action-types";

export const available = (item)=>{
    return {
        type:AVAILABLE,
        payload:item
    }
}
export const missing = (item)=>{
    return {
        type:MISSING,
        payload:item
    }
}
export const missingUrgent = (item)=>{
    return {
        type:MISSING_URGENT,
        payload:item
    }
}
export const editData = (item)=>{
    return {
        type:EDIT_DATA,
        payload:item
    }
}