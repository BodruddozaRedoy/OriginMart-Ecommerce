"use client"
import ShortService from "@/components/service/ShortService";
import Accordion from "./Accordion";
import FooterOne from "@/components/footer/FooterOne";
import HeaderFive from "@/components/header/HeaderFive";

export default function Home() {
    return (
        <div className="demo-one">
            <HeaderFive />

            <>
                


            <Accordion/>

                
                
            </>

            <ShortService />
            <FooterOne />
        </div>
    );
}
