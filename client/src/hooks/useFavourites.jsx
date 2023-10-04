import React, { useContext, useEffect } from "react";
import UserDetailContext from "../context/userDetailcontext";
import { useRef } from "react";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllFav } from "../utils/api";

const useFavourites = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { user } = useAuth0();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allFavourites",
    queryFn: () => getAllFav(user?.email, userDetails?.token),
    onSuccess: (data) => {
      console.log("in set fav", data);
      setUserDetails((prev) => ({ ...prev, favourites: data }));
    },
    enabled: user !== undefined,
    staleTime: 3000,
  });

  queryRef.current = refetch;
  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [userDetails?.token]);

  return { data, isError, isLoading, refetch };
};

export default useFavourites;
