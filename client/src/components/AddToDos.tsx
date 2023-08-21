
import React, { useState } from "react";
import { useForm } from '@mantine/form';
import {Modal, Group, Button} from '@mantine/core'

function AddToDos() {
    const [open, setOpen] = useState(false)

    const form = useForm({
        initialValues: {
            title: "",
            body:"",
        },
    })
    return <>
        <Modal opened={open} onClose={()=> setOpen(false)}  title="Create todo">
                The world
        </Modal>
        <Group position="center">
            <Button fullWidth mb={12} onClick={()=> setOpen(true)}>

            </Button>

        </Group>
    </>
}

export default AddToDos