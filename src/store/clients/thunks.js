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
        };
      });

      return newArrData;
    } catch (error) {
      return [];
    }
  };
};
