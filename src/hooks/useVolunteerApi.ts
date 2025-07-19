import { useQuery, useMutation } from '@tanstack/react-query';
import {
  applicationVolunteer,
  deleteApplicationVolunteer,
  getVolunteer,
  getMyVolunteers,
} from '../apis/volunteers';

export const useGetVolunteer = () => {
  return useQuery({
    queryKey: ['volunteer'],
    queryFn: getVolunteer,
  });
};

export const useGetMyVolunteers = () => {
  return useQuery({
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
