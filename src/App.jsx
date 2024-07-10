import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import Buttons from "./components/Buttons";
import Search from "./components/Search";
import './index.css'
import './flags.css'

export default function TemplateDemo() {

    const [products, setProducts] = useState([]);
    const [datos, setDatos] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        const extractData = (str) => {
            const jsonStr = str.match(/randomuserdata\((.*)\);/)[1];
            return JSON.parse(jsonStr);
        };

        const converterList = (data) => {
            const list = [];
            data?.forEach((row, ix) => {
                const item = {};
                item["picture"] = (
                    <img
                        style={{ borderRadius: "100%" }}
                        src={row?.picture?.thumbnail}
                        alt=""
                        width={36}
                    />
                );
                item["id"] = ix + 1;
                item["name"] = `${row?.name?.first} ${row?.name?.last}`;
                item["gender"] = row?.gender === "female" ? "Femenino" : "Masculino";
                item["location"] = `${row?.location?.city} ${row?.location?.state}`;
                item["phone"] = row?.phone;
                item["email"] = row?.email;
                item["nat"] = row?.location?.country.toUpperCase()
                list.push(item);
            });
            return list;
        };

        const handeDatos = async () => {
            const res = await axios.get(
                "https://randomuser.me/api/?results=10&callback=randomuserdata"
            );
            const jsonData = extractData(res.data);
            // console.log("El json es: ", jsonData?.results);
            const respuesta = converterList(jsonData?.results);
            setProducts(respuesta);
        };

        handeDatos();
    }, []);

    useEffect(() => {
        setDatos(products
            ?.filter(item =>
                item.id.toString().toLowerCase().includes(value.toLowerCase()) ||
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.gender.toString().toLowerCase().includes(value.toLowerCase()) ||
                item.location.toString().toLowerCase().includes(value.toLowerCase()) ||
                item.phone.toLowerCase().includes(value.toLowerCase()) ||
                item.email.toString().toLowerCase().includes(value.toLowerCase()) ||
                item.nat.toString().toLowerCase().includes(value.toLowerCase())
            ));
    }, [products, value, selectedProducts])

    useEffect(() => {
        console.log(selectedProducts)
    }, [selectedProducts])

    const handleRemove = () => {
        for (let index = 0; index < selectedProducts?.length; index++) {
            const element = selectedProducts[index];
            console.log(element?.id)
            setProducts(x => x.reduce((arr, item, ix) => {
                if (item.id !== element?.id) {
                    arr.push(item);
                }
                return arr
            }, []))
        }
    }

    const handleEdit = () => {
        for (let index = 0; index < selectedProducts.length; index++) {
            const element = selectedProducts[index];
            console.log(element?.id)
            setProducts(x => x.reduce((arr, item, ix) => {
                if (item.id !== element?.id) {
                    arr.push(item);
                }
                return arr
            }, []))
        }

        setProducts(x => x.reduce((arr, item, ix) => {
            arr.push({
                ...item,
                
            })
            return arr
        }, []))

    }

    const paginatorLeft = (
        <div>
            <span style={{ opacity: "1", fontFamily: '"Montserrat", sans-serif' }}>{`#Registros: ${datos ? datos.length : 0}`}</span>
        </div>
    );

    return (
        <div>
            <header
                style={{
                    backgroundColor: "#000",
                    height: "58.5px",
                    minWidth: "100vh",
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    justifyItems: "center",
                    alignContent: "center",
                    alignItems: "center"
                }}
            >
                <img width={30} src="https://logo.clearbit.com/clearbit.com" alt="logo" />
            </header>
            <div
                style={{
                    marginTop: "3.5rem",
                    maxWidth: "1500px",
                    paddingRight: "6.4rem",
                    paddingLeft: "6.4rem",
                    marginRight: "auto", marginLeft: "auto"
                }}
            >

                <title style={{ display: "flex", gap: "20px", marginTop: "2rem" }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: "700" }} className="text-black" >Mi tabla</div>
                </title>

                <Buttons {...{ handleRemove, handleEdit }} />

                <Search {...{ value, setValue }} />

                <Table {...{ datos, selectedProducts, setSelectedProducts, paginatorLeft }} />

            </div>

        </div>
    );
}
