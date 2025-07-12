// import React from 'react';
// import HeroSlider from '../components/sliders/HeroSlider';
// import FeaturedSlider from '../components/sliders/FeaturedSlider';
// import SectionsHead from '../components/common/SectionsHead';
// import TopProducts from '../components/product/TopProducts';
// import Services from '../components/common/Services';
// import Review from '../contexts/reviews/Review';


// const Home = () => {

//     return (
//         <main>
//             <section id="hero">
//                 <HeroSlider />
//             </section>

//             <section id="featured" className="section">
//                 <div className="container">
//                     <SectionsHead heading="Featured Products" />
//                     <FeaturedSlider />
//                 </div>
//             </section>

//             <section id="products" className="section">
//                 <div className="container">
//                     <SectionsHead heading="Top Products" />
//                     <TopProducts />
//                 </div>
//             </section>
//             <Review/>
//             <Services />
//         </main>
//     );
// };

// export default Home;;





import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import Services from '../components/common/Services';
import Review from '../contexts/reviews/Review';
import Video from '../componen/Video'; // ✅ Import your Video component

const Home = () => {
    return (
        <main>
            {/* Hero Section */}
            <section id="hero">
                <HeroSlider />
            </section>

            {/* ✅ Video Section inserted right after Hero */}
            <section id="video">
                <Video />
            </section>

            {/* Featured Products */}
            <section id="featured" className="section">
                <div className="container">
                    <SectionsHead heading="Featured Products" />
                    <FeaturedSlider />
                </div>
            </section>

            {/* Top Products */}
            {/* <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Top Products" />
                    <TopProducts />
                </div>
            </section> */}

            <Review />
            <Services />
        </main>
    );
};

export default Home;
