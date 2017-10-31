import WebApi from "api/WebApi";
import Notification from "model/Notification";
import Pagination from "model/Pagination";
import { SortOrder } from "enum/Sort";

export interface FetchNotificationsReq {
    page: number;
    pageSize: number;
    order: SortOrder;
}

export interface UpdateNotificationsStatusReq {
    notifications: number[];
    read: boolean;
}

export function FetchNotifications(payload: FetchNotificationsReq) {
    return WebApi.Get<Pagination<Notification>>("notifications", payload);
}

export function UpdateNotificationsStatus(
    payload: UpdateNotificationsStatusReq
) {
    return WebApi.Post<Boolean>("notifications/status", payload);
}

export default {
    FetchNotifications,
    UpdateNotificationsStatus
};
