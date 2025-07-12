import React from 'react';
import styles from '../style/Video.module.css';

const Video = () => {
  return (
    <section className={styles.platformSection}>
      <div className={styles.platformContainer}>
        {/* Left Text Section */}
        <div className={styles.platformText}>
          <h1 className={styles.platformTitle}>Platinum Perfumes</h1>
          <h2 className={styles.platformSubtitle}>The first platform for connectivity and data in the OR.</h2>
          <p className={styles.platformDescription}>
Experience unparalleled luxury with our Platinum Perfume Collection. Meticulously crafted with the finest ingredients, each fragrance offers unforgettable elegance, uniquely yours.
          </p>
          <a href="#more" className={styles.platformLink}>Explore Our Platinum Perfume Collection</a>
          
          {/* Stats Section */}
          <div className={styles.statsContainer}>
            <div className={styles.statBox}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Perfumes Collections</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Perfumes Sold</div>
            </div>
          </div>
        </div>

        {/* Right Video Section */}
        <div className={styles.platformVisual}>
          <div className={styles.videoContainer}>
            <video className={styles.heroVideo} autoPlay muted loop playsInline>
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;