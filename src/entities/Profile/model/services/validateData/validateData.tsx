import {Profile} from "entities/Profile";
import {validateProfileErrors} from "../../types/ProfileSchema";

export const validateData = (profile: Profile | undefined) => {
    const errors: validateProfileErrors[] = [];

    if(!profile){
        return [validateProfileErrors.NO_DATA]
    }

     if(!profile.first || !profile.lastname){
         errors.push(validateProfileErrors.INCORRECT_USERDATA);
    }

    if(!profile.age || !Number.isInteger(profile.age)){
       errors.push(validateProfileErrors.INCORRECT_AGE)
    }


    return errors;
 }