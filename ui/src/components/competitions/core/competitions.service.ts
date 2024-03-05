import axios, { AxiosResponse } from "axios";
import { DefaultErrorResult, handleError } from "../../../lib/axios/helpers";
import { COMPETITIONS_URL } from "../../../lib/axios/consts";

export const GetCompetitions = async (): Promise<
  any | DefaultErrorResult | AxiosResponse<any, any>
> => {
  try {
    const response: any = axios.get(`${COMPETITIONS_URL}`);
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const GetCompetitionById = async ({
  id,
}: {
  id: string;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  try {
    const response: any = axios.get(`${COMPETITIONS_URL}/${id}`);
    return response;
  } catch (error) {
    return handleError(error);
  }
};
