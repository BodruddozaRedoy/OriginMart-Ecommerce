"use client"
import Link from 'next/link';
import React from 'react';
function NavItem() {
    return (
        <div>
            <nav>
                <ul className="parent-nav">
                    <li className="parent ">
                        <Link className="nav-link" href="/">
                            Home
                        </Link>
                    </li>
                    <li className="parent">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="parent with-megamenu">
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="/vendor-grid">
                            Vendors
                        </Link>
                    </li>
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="/blog">
                            Blog
                        </Link>
                    </li>
                    <li className="parents">
                        <a target='_blank' href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                    <li className="parent">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavItem;