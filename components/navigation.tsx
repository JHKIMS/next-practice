"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

const Navigation = () => {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    {path === "/" ? "👉 ":""}<Link href="/">Home</Link>
                </li>
                <li>
                    {path === "/about-us" ? "👉 ":""}<Link href="/about-us">AboutUs</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;