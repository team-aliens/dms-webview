import { instance } from "../axios";
import { getMyVolunteersResponse, getVolunteerResponse } from "./response";

const router = '/volunteers';

// 봉사 활동 신청
export const applicationVolunteer = async (volunteerId: string) => {
    await instance.post(`${router}/application/${volunteerId}`);
}

// 봉사 활동 신청 취소
export const deleteApplicationVolunteer = async (volunteerId: string) => {
    await instance.delete(`${router}/cancellation/${volunteerId}`)
}

// 봉사 활동 조회
export const getVolunteer = async () => {
    const {data} = await instance.get<getVolunteerResponse>(`${router}`);
    return data;
}

// 내 봉사 신청 내역 조회
export const getMyVolunteers = async () => {
    const {data} = await instance.get<getMyVolunteersResponse>(`${router}/my/application`)
    return data;
}