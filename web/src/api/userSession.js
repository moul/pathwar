/* eslint-disable no-unused-vars */
import {baseApi} from "./index";

export function getUserSession() {
  return baseApi.get("/user/session");
}

export function deleteUserAccount(reason) {
  return baseApi.post(`/user/delete-account`, { reason: reason });
}

//Coupon calls

export function postCouponValidation(hash, teamID) {
  return baseApi.post(`/coupon-validation`, { hash: hash, team_id: teamID });
}
