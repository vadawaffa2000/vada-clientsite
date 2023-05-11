import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPrivate } from "../api/axios";
import { useApp } from "../context";
const useQueryMutation = (name) => {
  const queryClient = useQueryClient();
  const { state } = useApp();
  return useMutation(
    async ({ url, ...props }) => {
      console.log(props);
      const response = await axiosPrivate.post(
        `${url} `,
        {
          ...props,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.auth}`,
          },
        }
      );
      console.log(response.data);

      return response.data;

      // console.log(error);
      //
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(name);
      },
    }
  );
};

export default useQueryMutation;
