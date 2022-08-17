import { instance } from "./apiService";

// export const async = loginUserAPI(email, password) {

//  const json = JSON.stringify({ email, password });

//     return instance.post("api/users/sign-in", json, {
//       headers: {
//         "Content-Type": "application/json",
//       }, withCredentials: true,
//     });
//   };

export const registerUser = async (
  email: any,
  username: any,
  password: any
) => {
  const json = JSON.stringify({ email, username, password });

  return instance
    .post("api / users / sign - up", json, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};
