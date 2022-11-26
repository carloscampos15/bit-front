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
import { loadSectors } from "../../store/sectors/thunks";

export const useSectorsTable = () => {
  const dispatch = useDispatch();

  const tablePropsInit = {
    columns: [
      { key: "name", title: "Nombre" },
      { key: "showSector", width: 80 },
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
      const data = await dispatch(loadSectors());
      dispatchTable(updateData(data));
      dispatchTable(hideLoading());
    }
  };

  return { dispatchTable, tableProps };
};
