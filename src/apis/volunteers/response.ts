export interface getVolunteerResponse {
    volunteers: volunteers[];
}

export type VolunteerStatus = 'NOT_APPLIED' | 'APPLYING' | 'APPLIED';

export interface volunteers {
    id: string;
    name: string;
    content: string;
    score: number;
    optional_score: number;
    current_applicants: number;
    max_applicants: number;
    status: VolunteerStatus;
}

export interface getMyVolunteersResponse {
    volunteer_applications: applications[];
}

export interface applications {
    id: string;
    volunteer_id: string;
    status: VolunteerStatus;
    name: string;
}