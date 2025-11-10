import { useQuery, useMutation } from '@tanstack/react-query';
import {
  applicationVolunteer,
  deleteApplicationVolunteer,
  getVolunteer,
  getMyVolunteers,
} from '../apis/volunteers';
import {
  getMyVolunteersResponse,
  getVolunteerResponse,
} from '../apis/volunteers/response';
import { AxiosError } from 'axios';

export const useGetVolunteer = () => {
  return useQuery<getVolunteerResponse, AxiosError>({
    queryKey: ['volunteer'],
    queryFn: getVolunteer,
  });
};

export const useGetMyVolunteers = () => {
  return useQuery<getMyVolunteersResponse, AxiosError>({
    queryKey: ['my-volunteers'],
    queryFn: getMyVolunteers,
  });
};

export const useApplicationVolunteer = () => {
  return useMutation({
    mutationFn: (volunteerId: string) => applicationVolunteer(volunteerId),
  });
};

export const useDeleteApplicationVolunteer = () => {
  return useMutation({
    mutationFn: (volunteerId: string) =>
      deleteApplicationVolunteer(volunteerId),
  });
};
