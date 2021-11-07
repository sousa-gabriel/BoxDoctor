import { useCallback  } from "react";
import { useAuth } from "../context/Auth";
import { createdNewUserForDataBase } from "../services/serviceApp";

export const useCreatedUser = () => {
    const { user } = useAuth();

    const CreatedUser = useCallback(async () => {   
        try {
            await createdNewUserForDataBase(user);
        } catch (err) {
            console.log(err);
        } 
    }, []);

    return { CreatedUser };
};