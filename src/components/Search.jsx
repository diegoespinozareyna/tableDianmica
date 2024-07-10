import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import React from 'react'

function Search({ value, setValue }) {
    return (
        <div style={{ display: "flex", gap: "20px", marginTop: "2rem" }}>
            <IconField iconPosition="right">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Buscar" value={value} onChange={(e) => setValue(e.target.value)} />
            </IconField>
        </div>
    )
}

export default Search