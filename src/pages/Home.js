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





// import React from 'react';
// import HeroSlider from '../components/sliders/HeroSlider';
// import FeaturedSlider from '../components/sliders/FeaturedSlider';
// import SectionsHead from '../components/common/SectionsHead';
// import TopProducts from '../components/product/TopProducts';
// import Services from '../components/common/Services';
// import Review from '../contexts/reviews/Review';
// import Video from '../componen/Video'; // ✅ Import your Video component

// const Home = () => {
//     return (
//         <main>
//             {/* Hero Section */}
//             <section id="hero">
//                 <HeroSlider />
//             </section>

//             {/* ✅ Video Section inserted right after Hero */}
//             <section id="video">
//                 <Video />
//             </section>

//             {/* Featured Products */}
//             <section id="featured" className="section">
//                 <div className="container">
//                     <SectionsHead heading="Featured Products" />
//                     <FeaturedSlider />
//                 </div>
//             </section>
//             <Review />
//             <Services />
//         </main>
//     );
// };

// export default Home;



















import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import Services from '../components/common/Services';
import Review from '../contexts/reviews/Review';
import Video from '../componen/Video';

// Prefer setting REACT_APP_SITE_URL in your .env (e.g., https://yourdomain.com)
const SITE_URL = process.env.REACT_APP_SITE_URL || 'https://yourdomain.com';
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`; // place a 1200x630 image here

const Home = () => {
  return (
    <main>
      <Helmet>
        {/* Primary SEO */}
        <title>Platinum Perfumes Lebanon – Luxury Fragrances, Musk & Cosmetics</title>
        <meta
          name="description"
          content="Discover Platinum Perfumes Lebanon: premium men’s & women’s fragrances, musk, cosmetics, watches and more. Shop top quality at great prices."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph */}
        <meta property="og:title" content="Platinum Perfumes Lebanon – Luxury Fragrances, Musk & Cosmetics" />
        <meta
          property="og:description"
          content="Discover Platinum Perfumes Lebanon: premium men’s & women’s fragrances, musk, cosmetics, watches and more."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section id="hero">
        <HeroSlider />
      </section>

      {/* Video right after Hero */}
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

      {/* Reviews & Services */}
      <Review />
      <Services />
    </main>
  );
};

export default Home;
