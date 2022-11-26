import { startLogout } from "./../auth/thunks";
import { bitApi } from "./../../api/bitApi";

export const loadContacts = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(startLogout());

    try {
      const { data } = await bitApi.get("/api/client-contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newArrData = data.map((contact, index) => {
        return {
          id: index,
          name: contact.name,
          email: contact.email,
        };
      });

      return newArrData;
    } catch (error) {
      return [];
    }
  };
};
