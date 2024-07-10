import { Button } from 'primereact/button'
import React from 'react'
import '../index.css'

function Buttons({ handleRemove, handleEdit }) {
    return (
        <div style={{ display: "flex", gap: "20px", marginTop: "2rem" }}>
            <Button width={150} style={{ width: "150px", fontFamily: '"Montserrat", sans-serif' }} type="button" label="Filtros" icon="pi pi-filter" outlined />
            <Button onClick={handleEdit} width={100} style={{ width: "150px", fontFamily: '"Montserrat", sans-serif' }} type="button" label="Editar" icon="pi pi-pencil" outlined />
            <Button
                onClick={handleRemove}
                // width={100}
                style={{ width: "150px", fontFamily: '"Montserrat", sans-serif' }}
                 label="Eliminar" severity="danger"
                // label="Eliminar"
                icon="pi pi-trash" 
                outlined
            />
        </div>
    )
}

export default Buttons