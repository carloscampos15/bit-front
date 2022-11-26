import { startLogout } from "./../auth/thunks";
import { bitApi } from "./../../api/bitApi";

export const loadClients = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(startLogout());

    try {
      const { data } = await bitApi.get("/api/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newArrData = data.map((client, index) => {
        return {
          id: index,
          name: client.name,
          nit: client.nit,
          email: client.email,
          address: client.add,
          city: client.city,
          sector: client.sector.name,
          resource_id: client.id,
        };
      });

      return newArrData;
    } catch (error) {
      return [];
    }
  };
};

export const loadClient = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(startLogout());

    try {
      const { data } = await bitApi.get(`/api/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        client: data,
        message: null,
      };
    } catch ({ response }) {
      switch (response.status) {
        case 400:
        case 404:
          return {
            client: null,
            message: "El recurso al que deseas acceder no existe.",
          };
      }
    }
  };
};
