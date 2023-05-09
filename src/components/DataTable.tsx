import { useState } from "react";

import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import ContactForm from "./ContactForm"; //not sure if i need this one

const columns: GridColDef[]=[
    {field:'id', headerName:'ID', width:90, hide: true },
    {field: 'name', headerName: 'Contact Name', flex: 1},
    {field:'email', headerName: 'Email', flex: 1},
    {field:'phone_number', headerName: 'Phone Number', flex:1 },
    {field:'address', headerName:'Address', flex:2}
]

function DataTable() {
    const [open, setOpen] = useState(false)

    const { contactData, getData } = useGetData();
    //TODO write useGetData hook and selection model state change

    const [ selectionModel, setSelectionModel ] = useState<any>([])

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }


    // const getData = async () => {
    //     const result = await server_calls.get()
    //     console.log('result here', result)
    // }

return (
    <>
    <Modal
        open = {open}
        onClose={handleClose}
    />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 m-3 rounded 
                    hover:bg-slate-800 hover:text-white"
                    onClick={handleOpen}>
                        Create New Contact
                </button>
            </div>
                <Button 
                    className="p-3 bg-slate-300 m-3 rounded 
                    hover:bg-slate-800 hover:text-white">
                    Update
                </Button>
                <Button 
                    className="p-3 bg-slate-300 m-3 rounded 
                    hover:bg-slate-800 hover:text-white">
                    Delete
                </Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{height: 400, width:'100%'}}>
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Contacts</h2>
            <DataGrid rows = {contactData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange ={ (item:any) => {
                setSelectionModel(item)
            }}
            />

        </div>

        {/* data table section */}
    </>
  );
}

export default DataTable;
