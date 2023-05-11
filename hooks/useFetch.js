import { axiosPrivate } from "../api/axios";

import { useQuery } from "@tanstack/react-query";
import { useApp } from "../context";
function useFetch(url, name) {
  const { state } = useApp();

  const fetchTaskList = async () => {
    const response = await axiosPrivate.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.auth}`,
      },
    });
    // console.log(response.data);
    const data = await response.data;
    return data;
  };
  const { isError, isLoading, data, error } = useQuery([name], fetchTaskList);
  return { data, isLoading, isError, error };
}

export default useFetch;
