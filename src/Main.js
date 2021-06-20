// import React from 'react';
// import PropTypes from 'prop-types';
// import { Helmet, HelmetProvider } from 'react-helmet-async';


// const Main = (props) => (
//     <HelmetProvider>
//       <Analytics />
//       <ScrollToTop />
//       <Helmet titleTemplate="%s | MakeIt" defaultTitle="Michael Jones" defer={false}>
//         {props.title && <title>{props.title}</title>}
//         <meta name="description" content={props.description} />
//       </Helmet>
//       <div id="wrapper">
//         <Navigation />
//         <div id="main">
//           {props.children}
//         </div>
//         {props.fullPage ? null : <SideBar />}
//       </div>
//     </HelmetProvider>
// );
  
// Main.propTypes = {
//     children: PropTypes.oneOfType([
//       PropTypes.arrayOf(PropTypes.node),
//       PropTypes.node,
//     ]),
//     fullPage: PropTypes.bool,
//     title: PropTypes.string,
//     description: PropTypes.string,
//   };
  
//   Main.defaultProps = {
//     children: null,
//     fullPage: false,
//     title: null,
//     description: "Michael D'Angelo's personal website.",
// };
  
// export default Main;
