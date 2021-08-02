import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/actions/users";

const Users = () => {
  const { users, error, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  console.log(users);

  return (
    <div>
      <div>{loading ? <div>...loading ...</div> : <div>{error}</div>}</div>
      {users?.map((user, i) => (
        <div key={i}>{user.name} </div>
      ))}
    </div>
  );
};

export default Users;
