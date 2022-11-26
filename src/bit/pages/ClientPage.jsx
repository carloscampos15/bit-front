import { BitLayout } from './../layout/BitLayout';
import { useClientsTable } from './../hooks/useClientsTable';
import { Eye } from 'react-bootstrap-icons';
import { Table } from 'ka-table';
import { search } from 'ka-table/actionCreators';
import { NavLink } from 'react-router-dom';

export const ClientPage = () => {
    const { dispatchTable, tableProps } = useClientsTable();

    const Show = ({ rowData }) => {
        return (
            <NavLink to={`/clients/${rowData.applicant_id}`} >
                <Eye />
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
