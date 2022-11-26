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
          resource_id: contact.id,
        };
      });

      return newArrData;
    } catch (error) {
      return [];
    }
  };
};

export const loadContact = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(startLogout());

    try {
      const { data } = await bitApi.get(`/api/client-contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        contact: data,
        message: null,
      };
    } catch ({ response }) {
      switch (response.status) {
        case 400:
        case 404:
          return {
            contact: null,
            message: "El recurso al que deseas acceder no existe.",
          };
      }
    }
  };
};
