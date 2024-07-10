import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react'

function Table({ datos, selectedProducts, setSelectedProducts, paginatorLeft }) {
    return (
        <div style={{ marginTop: "2rem" }}>
            <DataTable
                // header={header}
                headerStyle={{ backgroundColor: '#000' }}
                value={datos}
                size={"small"}
                selectionMode={"checkbox"}
                selection={selectedProducts}
                onSelectionChange={(e) => {
                    // console.log(e);
                    setSelectedProducts(e.value);
                }}
                dataKey="id"
                tableStyle={{
                    // minWidth: "100rem",
                    fontFamily: '"Montserrat", sans-serif',
                }}
                scrollable
                scrollHeight="300px"
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginatorLeft={paginatorLeft}
                removableSort
            >
                <Column
                    style={{ minWidth: "50px" }}
                    selectionMode="multiple" headerStyle={{ backgroundColor: '#d3dbdb82' }} ></Column>
                <Column
                    // style={{ minWidth: "70px" }}
                    field="picture" sortable header="Foto" headerStyle={{ backgroundColor: '#d3dbdb82' }} ></Column>
                <Column
                    // style={{ maxWidth: "100px" }}
                    field="name" sortable header="Nombre" headerStyle={{ backgroundColor: '#d3dbdb82' }} ></Column>
                <Column // style={{ maxWidth: "30px" }} 
                    field="gender" sortable header="Género" headerStyle={{ backgroundColor: '#d3dbdb82' }} ></Column>
                <Column
                    // tyle={{ maxWidth: "80px" }}
                    field="location" sortable header="Dirección" headerStyle={{ backgroundColor: '#d3dbdb82' }} ></Column>
                <Column
                    // style={{ maxWidth: "40px" }}
                    field="phone" sortable header="Teléfono" headerStyle={{ backgroundColor: '#d3dbdb82' }} ></Column>
                <Column
                    // style={{ maxWidth: "50px" }}
                    field="email" sortable header="Correo electrónico" headerStyle={{ backgroundColor: '#d3dbdb82' }} ></Column>
                <Column
                    // style={{ maxWidth: "30px" }}
                    field="nat" sortable header="País" headerStyle={{ backgroundColor: '#d3dbdb82' }} ></Column>
            </DataTable>
        </div>
    )
}

export default Table