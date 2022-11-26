import { bitApi } from "../../api/bitApi";
import { checkQuery, login, logout, updateError } from "./authSlice";
import queryString from "query-string";
import { encode } from "js-base64";

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    // validating...
    dispatch(checkQuery());

    try {
      const { data } = await bitApi.post(
        "/api/oauth/token",
        queryString.stringify({
          username: email,
          password,
          grant_type: "password",
        }),
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${encode(`client_bit:12345`)}`,
          },
        }
      );

      // do login
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      dispatch(login({ ...data }));
    } catch (error) {
      switch (error.response.status) {
        // throw error
        case 400:
          dispatch(
            updateError({ error: { message: "Credenciales invalidas" } })
          );
          break;
        case 500:
          dispatch(updateError({ error: { message: "Error en el servidor" } }));
          break;
      }
    }
  };
};

export const checkAuthToken = () => {
  return async (dispatch) => {
    // validating...
    dispatch(checkQuery());

    try {
      const token = localStorage.getItem("refresh_token");

      if (!token) return dispatch(logout());

      const { data } = await bitApi.post(
        "/api/oauth/token",
        queryString.stringify({
          grant_type: "refresh_token",
          refresh_token: token,
        }),
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${encode(`client_bit:12345`)}`,
          },
        }
      );

      // do login
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      dispatch(login({ ...data }));
    } catch (error) {
      localStorage.clear();
      dispatch(logout());
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};
