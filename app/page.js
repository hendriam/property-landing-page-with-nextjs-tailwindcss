import Hero from "./sections/section-hero";
import Header from "./sections/section-header";
import Services from "./sections/section-services";
import BestCollections from "./sections/section-best-collections";
import Feature from "./sections/section-feature";
import property1 from "../public/images/property-1.jpg";
import property2 from "../public/images/property-2.jpg";
import property3 from "../public/images/property-3.jpg";
import property4 from "../public/images/property-4.jpg";
import property5 from "../public/images/property-5.jpg";
import property6 from "../public/images/property-6.jpg";
import feature1 from "../public/images/feature-1.jpg";
import feature2 from "../public/images/feature-2.jpg";
import feature3 from "../public/images/feature-3.jpg";
import Subscribe from "./sections/section-subscribe";
import Footer from "./sections/section-footer";

let properties = [
    { id: 1, src: property1 },
    { id: 2, src: property2 },
    { id: 3, src: property3 },
    { id: 4, src: property4 },
    { id: 5, src: property5 },
    { id: 6, src: property6 },
];

let features = [
    { id: 1, src: feature1 },
    { id: 2, src: feature2 },
    { id: 3, src: feature3 },
];

export default function Page() {
    return (
        <main>
            <Header />
            <Hero />
            <Services />
            <BestCollections properties={properties} />
            <Feature features={features} />
            <Subscribe />
            <Footer />
        </main>
    );
}
