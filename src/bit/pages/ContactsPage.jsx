import { BitLayout } from '../layout/BitLayout';
import { Eye } from 'react-bootstrap-icons';
import { Table } from 'ka-table';
import { search } from 'ka-table/actionCreators';
import { NavLink } from 'react-router-dom';
import { useContactsTable } from '../hooks/useContactTable';

export const ContactsPage = () => {
    const { dispatchTable, tableProps } = useContactsTable();

    const Show = ({ rowData }) => {
        return (
            <NavLink to={`/contacts/${rowData.resource_id}`} >
                <Eye />
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
