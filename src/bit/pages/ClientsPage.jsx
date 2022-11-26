import { BitLayout } from '../layout/BitLayout';
import { useClientsTable } from '../hooks/useClientsTable';
import { Eye, Trash } from 'react-bootstrap-icons';
import { Table } from 'ka-table';
import { search, deleteRow } from 'ka-table/actionCreators';
import { NavLink } from 'react-router-dom';

export const ClientsPage = () => {
    const { dispatchTable, tableProps, deleteResource } = useClientsTable();

    const Show = ({ rowData }) => {
        return (
            <NavLink to={`/clients/${rowData.resource_id}`} >
                <Eye />
            </NavLink>
        )
    }

    const Delete = ({ dispatch, rowData }) => {
        return (
            <NavLink onClick={async () => {
                await deleteResource(rowData.resource_id);
                dispatch(deleteRow(rowData.id))
            }} >
                <Trash />
            </NavLink>
        )
    }

    return (
        <BitLayout title='Clientes'>
            <div className="row justify-content-end">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <input type='search' defaultValue={tableProps.searchText} onChange={({ currentTarget }) => {
                        dispatchTable(search(currentTarget.value));
                    }} className="form-control mb-3" placeholder='Buscar...' />
                </div>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <Table
                                className="table"
                                {...tableProps}
                                childComponents={{
                                    cellText: {
                                        content: (props) => {
                                            if (props.column.key === 'showClient') {
                                                return (<Show {...props} />)
                                            }
                                            if (props.column.key === 'deleteClient') {
                                                return (<Delete {...props} />)
                                            }
                                        }
                                    },
                                    noDataRow: {
                                        content: () => 'No se encontraron datos para mostrar'
                                    }
                                }}
                                dispatch={dispatchTable}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </BitLayout>
    )
}
