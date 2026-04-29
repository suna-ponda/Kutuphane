import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { Button } from "./ui/button";
import { addCategory } from "@/actions/actions";
import { usePathname } from "next/navigation";
//import { toast } from "sonner";

type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    category?: string
}

const formSchema = z.object({
    id: z.number().default(-1),
    // id: z.number(),
    name: z.string().min(2, {
        message: 'Category must be entered'
    }).max(20)
})

function AddCategoryDialog({ setOpen, open, category }: Props) {
    
    const path = usePathname()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { id:1, name: "" }

    })

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        await addCategory(values.name, path)
        //toast
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add category</DialogTitle>
                    <DialogDescription></DialogDescription>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                        <FieldGroup>
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel>Category</FieldLabel>
                                        <Input
                                            {...field}
                                            aria-invalid={fieldState.invalid}
                                            placeholder="category name"
                                            autoComplete="off" />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )} />
                        </FieldGroup>
                        <Button type="submit">Save</Button>
                    </form>
                </DialogHeader>
            </DialogContent>

        </Dialog>
    )
}

export default AddCategoryDialog