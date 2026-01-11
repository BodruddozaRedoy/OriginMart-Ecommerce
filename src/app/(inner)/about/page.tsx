
import AboutBanner from "@/components/banner/AboutBanner";
import CounterOne from "@/components/counterup/CounterOne";
import AboutOne from "@/components/about/AboutOne";
import Team from "@/components/about/Team";
import ServiceOne from "@/components/service/ServiceOne";
import TestimonilsOne from "@/components/testimonials/TestimonilsOne";
import ShortService from "@/components/service/ShortService";

import FooterOne from "@/components/footer/FooterOne";
import HeaderFive from "@/components/header/HeaderFive";

export default function Home() {
    return (
        <div className="demo-one">
            <HeaderFive />
            <AboutBanner />
            <CounterOne/>
            <AboutOne/>
            <Team/>
            <ServiceOne/>
            <TestimonilsOne/>
            <ShortService/>



            <FooterOne />

        </div>
    );
}
