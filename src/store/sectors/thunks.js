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
          resource_id: sector.id,
        };
      });

      return newArrData;
    } catch (error) {
      return [];
    }
  };
};

export const loadSector = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(startLogout());

    try {
      const { data } = await bitApi.get(`/api/sectors/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        sector: data,
        message: null,
      };
    } catch ({ response }) {
      switch (response.status) {
        case 400:
        case 404:
          return {
            sector: null,
            message: "El recurso al que deseas acceder no existe.",
          };
      }
    }
  };
};

export const deleteSector = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(startLogout());

    try {
      const { data } = await bitApi.delete(`/api/sectors/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        sector: true,
        message: null,
      };
    } catch ({ response }) {
      switch (response.status) {
        case 400:
        case 404:
          return {
            sector: null,
            message: "El recurso al que deseas acceder no existe.",
          };
      }
    }
  };
};
