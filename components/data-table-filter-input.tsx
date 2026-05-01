import React from "react";
import { Table } from "@tanstack/react-table";
import { Input } from "./ui/input";

interface DataTableFilterInputProps<TData> {
    column: string,
    table: Table<TData>
}


function DataTableFilterInput<TData>({
    column, 
    table
}: DataTableFilterInputProps<TData>) {
    return (
        <Input
            placeholder="Filter"
            value={(table.getColumn(column)?.getFilterValue() as string) ??""}
            onChange={(event) => table.getColumn(column)?.setFilterValue(event.target.value)}
            className="max-w-sm" />
    )
}

export default DataTableFilterInput