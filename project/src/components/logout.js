import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      localStorage.removeItem("token");
      localStorage.removeItem('user_id');
    }
    push("/login");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default Logout;
