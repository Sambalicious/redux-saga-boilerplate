import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/ducks/userSlice";
import { getUsers } from "../redux/ducks/usersSlice";

const Users = () => {
  const { users, error, loading } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(user);

  return (
    <div>
      {loading ? <div>...loading...</div> : <div>{error} </div>}
      {users?.length > 0 &&
        users.map((user, i) => (
          <div onClick={() => dispatch(getUser({ id: user.id }))} key={i}>
            {user.name} {user.id}
          </div>
        ))}
    </div>
  );
};

export default Users;
