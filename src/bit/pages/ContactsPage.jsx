import { BitLayout } from '../layout/BitLayout';
import { Eye, Trash } from 'react-bootstrap-icons';
import { Table } from 'ka-table';
import { search, deleteRow } from 'ka-table/actionCreators';
import { NavLink } from 'react-router-dom';
import { useContactsTable } from '../hooks/useContactTable';

export const ContactsPage = () => {
    const { dispatchTable, tableProps, deleteResource } = useContactsTable();

    const Show = ({ rowData }) => {
        return (
            <NavLink to={`/contacts/${rowData.resource_id}`} >
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
        <BitLayout title='Contactos'>
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
                                            if (props.column.key === 'showContact') {
                                                return (<Show {...props} />)
                                            }
                                            if (props.column.key === 'deleteContact') {
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
