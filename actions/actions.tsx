"use server"
import { prisma } from "@/lib/prisma"

import { revalidatePath } from "next/cache";

///////////////////////////
// Category 
//////////////////////////

export async function addCategory(name: string, path: string) {
    // export async function addCategory(name: string) {
    try {
        // const category = await prisma.$transaction([
            const category = await prisma.book_categories.create({
                data: {
                    category_name: name
                }
            })

        revalidatePath(path)
        return category

    } catch (error) {
        throw error
    }
console.log(name)
 }


///////////////////////////
// Books 
//////////////////////////


///////////////////////////
// Users 
//////////////////////////


///////////////////////////
// Activities 
//////////////////////////
