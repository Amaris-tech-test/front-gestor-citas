import axios, { AxiosRequestConfig } from "axios";

const API_URL = "http://localhost:3000/";

interface fetchProps<T> {
  type: "get" | "post" | "patch" | "put";
  url: string;
  data: T;
  accessToken?: string | null;
}

export const validateFetch = async<T> ({
  type,
  url,
  data,
  accessToken,
}:fetchProps<T>) => {
  const headers: AxiosRequestConfig["headers"] = {
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }
  const response = await axios({
    method: type,
    url: `${API_URL}${url}`,
    data,
    headers,
  });

  return response.data;
};
