import { instance } from "../axios";
import { getMyVolunteersResponse, getVolunteerResponse } from "./response";

const router = '/volunteers';

// 봉사 활동 신청
export const applicationVolunteer = async (volunteerId: string) => {
    const url = `${router}/application/${volunteerId}`;
    console.log(`Requesting POST: ${url}`);
    await instance.post(url);
}

// 봉사 활동 신청 취소
export const deleteApplicationVolunteer = async (volunteerId: string) => {
    const url = `${router}/cancellation/${volunteerId}`;
    console.log(`Requesting DELETE: ${url}`);
    await instance.delete(url)
}

// 봉사 활동 조회
export const getVolunteer = async () => {
    const url = `${router}`;
    console.log(`Requesting GET: ${url}`);
    const {data} = await instance.get<getVolunteerResponse>(url);
    return data;
}

// 내 봉사 신청 내역 조회
export const getMyVolunteers = async () => {
    const url = `${router}/my/application`;
    console.log(`Requesting GET: ${url}`);
    const {data} = await instance.get<getMyVolunteersResponse>(url)
    return data;
}