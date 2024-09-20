export interface getVolunteerResponse {
    volunteers: volunteers[];
}

export interface volunteers {
    id: string;
    name: string;
    content: string;
    score: number;
    optional_score: number;
    max_applicants: number;
}

export interface getMyVolunteersResponse {
    volunteer_applications: applications[];
}

export interface applications {
    id: string;
    volunteer_id: string;
    approved: boolean;
    name: string;
}