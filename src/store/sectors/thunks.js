import { startLogout } from "./../auth/thunks";
import { bitApi } from "./../../api/bitApi";

export const loadSectors = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(startLogout());

    try {
      const { data } = await bitApi.get("/api/sectors", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newArrData = data.map((sector, index) => {
        return {
          id: index,
          name: sector.name,
        };
      });

      return newArrData;
    } catch (error) {
      return [];
    }
  };
};
