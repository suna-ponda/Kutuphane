import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
    return (
        <Link href="/">
            <Image loading="eager" className="hidden lg:flex" src="/book-icon.png" width={80} height={80} alt="library-logo" />
            <Image loading="eager" className="flex lg:hidden" src="/book-icon.png" width={60} height={60} alt="library-logo" />
        </Link>
    )
}

export default Logo