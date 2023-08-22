
import React, { useState } from "react";
import { useForm } from '@mantine/form';
import {Modal, Group, Button, TextInput, Textarea} from '@mantine/core'
import { ENDPOINT, Todo } from "../App";
import { KeyedMutator } from "swr/_internal";

function AddToDos( {mutate}:{mutate: KeyedMutator<Todo[]>}) {
    const [open, setOpen] = useState(false)

    const form = useForm({
        initialValues: {
            title: "",
            body:"",
        },
    })
    async function createToDo(values: { title: string, body: string }) {
        const updated = await fetch(`${ENDPOINT}/api/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
        })
        .then( res => res.json())
        form.reset()
        setOpen(false)
    }
    return (
        <>
            <Modal opened={open} onClose={() => setOpen(false)} title="Create todo">
                <form onSubmit={form.onSubmit(createToDo)}>
                    <TextInput
                        required
                        mb={12}
                        label="Todo"
                        placeholder="what do you want to do"
                        {...form.getInputProps("title")}
                    />
                    <Textarea
                     required
                        mb={12}
                        label="Todo"
                        placeholder="tell more"
                        {...form.getInputProps("body")}
                    />
                    <Button type="submit">
                        Create To Do
                    </Button>
                    
                </form>
                
            </Modal>
            <Group position="center">
                <Button fullWidth mb={12} onClick={()=> setOpen(true)}>

                </Button>

            </Group>
        </>
        )
    }

export default AddToDos