import {StateSchema} from "@/app/providers/StoreProveder";
import {createSelector} from "@reduxjs/toolkit";
import {RolesType} from "@/entities/User/model/types/UserSchema";

export const userRolesSelector = (state: StateSchema) => state.user.authData?.roles;

export const isAdmin = createSelector(userRolesSelector, (roles)=>Boolean(roles?.includes(RolesType.ADMIN)));
export const isManager = createSelector(userRolesSelector, (roles)=>Boolean(roles?.includes(RolesType.MANAGER)));