import { BugRequest } from "./request";
import { instance } from "../axios";

export const Bug = async (body:BugRequest) => {
    await instance.post('/bugs', body);
}