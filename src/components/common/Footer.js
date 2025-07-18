// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { footMenu, footSocial } from '../../data/footerData';


// const Footer = () => {

//     const [subValue, setSubValue] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubValue('');
//         alert('Thankyou, you are subscribed to receive our daily newsletter');
//     };

//     const currYear = new Date().getFullYear();


//     return (
//         <footer id="footer">
//             <div className="container">
//                 <div className="wrapper footer_wrapper">
//                     <div className="foot_about">
//                         <h2>
//                             <Link to="/">Platinum Perfumes</Link>
//                         </h2>
//                         <div className="foot_subs">
//                             <p>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
//                             <form onSubmit={handleSubmit}>
//                                 <input
//                                     type="email"
//                                     className="input_field"
//                                     placeholder="Email Address*"
//                                     required
//                                     value={subValue}
//                                     onChange={(e) => setSubValue(e.target.value)}
//                                 />
//                                 <button type="submit" className="btn">Subscribe</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="separator"></div>

//             <div className="sub_footer">
//                 <div className="container">
//                     <div className="sub_footer_wrapper">
//                         <div className="foot_copyright">
//                         </div>
//                         <div className="foot_social">
//                             {
//                                 footSocial.map((item) => {
//                                     const { id, icon, path } = item;
//                                     return (
//                                         <Link to={path} key={id}>{icon}</Link>
//                                     );
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer >
//     );
// };

// export default Footer;











import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { footMenu, footSocial } from '../../data/footerData';

const Footer = () => {
  const [subValue, setSubValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue('');
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 4000); // Hide after 4 sec
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const currYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <div className="wrapper footer_wrapper">
          <div className="foot_about">
            <h2>
              <Link to="/">Platinum Perfumes</Link>
            </h2>
            <div className="foot_subs">
              <p>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="input_field"
                  placeholder="Email Address*"
                  required
                  value={subValue}
                  onChange={(e) => setSubValue(e.target.value)}
                />
                <button type="submit" className="btn">Subscribe</button>
              </form>

              {showPopup && (
                <div className="subscription_popup">
                  Thank you for signing up! You will receive every update through your email.
                </div>
              )}
            </div>
          </div>

          {footMenu.map(item => {
            const { id, title, menu } = item;
            return (
              <div className="foot_menu" key={id}>
                <h4>{title}</h4>
                <ul>
                  {menu.map(item => {
                    const { id, link, path } = item;
                    return (
                      <li key={id}>
                        <Link to={path}>{link}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="separator"></div>

      <div className="sub_footer">
        <div className="container">
          <div className="sub_footer_wrapper">
            <div className="foot_copyright"></div>
            <div className="foot_social">
              {footSocial.map(({ id, icon, path }) => (
                <Link to={path} key={id}>{icon}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
