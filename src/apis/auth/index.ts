import { instance } from "../axios";
import { AuthorizationResponse } from "./response";


const router = '/auth';

export const reIssueToken = async (refreshToken: string) => {
    const response = await instance
      .put<AuthorizationResponse>(`${router}/reissue`, null, {
        headers: {
          'refresh-token': `${refreshToken}`,
        },
      })
      .then((res) => {
        // setUseableFeatures(res.data.features);
        return res;
      });
  
    return response.data;
  };