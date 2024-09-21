import { instance } from "../axios";
import { getMyVolunteersResponse, getVolunteerResponse } from "./response";

const router = '/volunteers';
const token = 'eyJKV1QiOiJhY2Nlc3MiLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIzOTMzNjEzMC0zMDYxLTM3NjEtMmQzNS02MzM3MzgyZDMxMzEiLCJhdXRob3JpdHkiOiJTVFVERU5UIiwiaWF0IjoxNzI2ODk3ODc3LCJleHAiOjE3MjY5MDE0Nzd9.CdwNZumgGvO9_wk8KKZdq0FmivdgaMQUyh5T7o9a_eJ0ugT9g0bGvZRsZf25ouf5wXafvp9vaDjwMGkNbyAyrA'

// 봉사 활동 신청
// export const applicationVolunteer = async (volunteerId: string) => {
//     await instance.post(`${router}/apply/${volunteerId}`)
// }
export const applicationVolunteer = async (volunteerId: string) => {
    await instance.post(
        `${router}/apply/${volunteerId}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
}

// 봉사 활동 신청 취소
export const deleteApplicationVolunteer = async (volunteerApplicationId: string) => {
    await instance.delete(`${router}/cancel/${volunteerApplicationId}`)
}

// 봉사 활동 조회
export const getVolunteer = async () => {
    const {data} = await instance.get<getVolunteerResponse>(
        `${router}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return data;
}

// 내 봉사 신청 내역 조회
export const getMyVolunteers = async () => {
    const {data} = await instance.get<getMyVolunteersResponse>(
        `${router}/my/application`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return data;
}