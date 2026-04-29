import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { User2Icon } from "lucide-react";

function Navbar() {
    return (
        <nav className="bg-black text-white w-full hidden sm:block">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center space-x-8">
                    <Link href="/" className="hover:text-gray-400">
                        Cataloge
                    </Link>
                    <Link href="/" className="hover:text-gray-400">
                        Location
                    </Link>
                    <Link href="/" className="hover:text-gray-400">
                        Activities
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hover:text-black">Library Resources</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col p-4 md:w-100 lg:w-125">
                                        <li>
                                            <Link href="library-card" className="block space-y-1 p-3 rounded hover:bg-accent">
                                                <div className="font-medium leading-none">Library Card</div>
                                                <p className="text-sm text-muted-foreground">Use your library card to borrow materials, access digital resources, and explore library technology.</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="book-a-room" className="block space-y-1 p-3 rounded hover:bg-accent">
                                                <div className="font-medium leading-none">Book a room</div>
                                                <p className="text-sm text-muted-foreground">Book a room for a metting or group discussions.</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="equipment-rental" className="block space-y-1 p-3 rounded hover:bg-accent">
                                                <div className="font-medium leading-none">Equipment rental</div>
                                                <p className="text-sm text-muted-foreground">Rent 3D printers, projectors and more.</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <User2Icon size={16}/>
            </div>
        </nav>
    )
}

export default Navbar