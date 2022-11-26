import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  hideLoading,
  showLoading,
  loadData,
  updateData,
} from "ka-table/actionCreators";
import { kaReducer } from "ka-table";
import { SortingMode, PagingPosition, ActionType } from "ka-table/enums";
import { loadClients, deleteClient } from "../../store/clients/thunks";

export const useClientsTable = () => {
  const dispatch = useDispatch();

  const tablePropsInit = {
    columns: [
      { key: "name", title: "Nombre" },
      { key: "nit", title: "Nit" },
      { key: "email", title: "Email" },
      { key: "address", title: "Dirección" },
      { key: "city", title: "Ciudad" },
      { key: "sector", title: "Sector" },
      { key: "showClient", width: 60 },
      { key: "deleteClient", width: 60 },
    ],
    loading: {
      enabled: true,
    },
    paging: {
      enabled: true,
      pageIndex: 0,
      pageSize: 10,
      pageSizes: [5, 10, 15],
      position: PagingPosition.Bottom,
    },
    rowKeyField: "id",
    sortingMode: SortingMode.Single,
    singleAction: loadData(),
    search: ({ searchText, rowData, column }) => {
      if (column.key === "passed") {
        return (
          (searchText === "false" && !rowData.passed) ||
          (searchText === "true" && rowData.passed)
        );
      }
    },
  };

  const [tableProps, changeTableProps] = useState(tablePropsInit);

  const dispatchTable = async (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));

    if (action.type === ActionType.LoadData) {
      dispatchTable(showLoading());
      const data = await dispatch(loadClients());
      dispatchTable(updateData(data));
      dispatchTable(hideLoading());
    }
  };

  const deleteResource = async (id) => {
    await dispatch(deleteClient(id));
  };

  return { dispatchTable, tableProps, deleteResource };
};
