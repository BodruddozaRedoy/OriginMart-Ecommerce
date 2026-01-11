'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [openThirdLevelKey, setOpenThirdLevelKey] = useState<string | null>(null);

    const toggleMenu = (index: number) => {
        setOpenMenuIndex(prev => (prev === index ? null : index));
    };

    const toggleThirdMenu = (key: string) => {
        setOpenThirdLevelKey(prev => (prev === key ? null : key));
    };

    return (
        <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">

                {/* Home */}
                <li >
                    <Link href="/" className="main" onClick={() => toggleMenu(0)}>Home</Link>
                </li>

                {/* About */}
                <li><Link className="main" href="/about">About</Link></li>

                {/* Shop */}
                <li>
                    <Link href="/shop" className="main" onClick={() => toggleMenu(2)}>Shop</Link>
                </li>

                {/* Blog */}
                <li>
                    <Link href="/blog" className="main" onClick={() => toggleMenu(3)}>Blog</Link>
                </li>

                {/* Contact */}
                <li><Link className="main" href="/contact">Contact Us</Link></li>

            </ul>
        </nav>
    );
};

export default MobileMenu;
