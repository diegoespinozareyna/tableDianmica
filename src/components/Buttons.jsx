import { Button } from 'primereact/button'
import React from 'react'

function Buttons({ handleRemove }) {
    return (
        <div style={{ display: "flex", gap: "20px", marginTop: "2rem" }}>
            <Button width={100} style={{ width: "120px", fontFamily: '"Montserrat", sans-serif' }} type="button" label="Filtros" icon="pi pi-filter" outlined />
            <Button width={100} style={{ width: "120px", fontFamily: '"Montserrat", sans-serif' }} type="button" label="Editar" icon="pi pi-pencil" outlined />
            <Button onClick={handleRemove} width={100} style={{ width: "120px", fontFamily: '"Montserrat", sans-serif' }} type="button" severity="danger" label="Eliminar" icon="pi pi-trash" outlined />
        </div>
    )
}

export default Buttons