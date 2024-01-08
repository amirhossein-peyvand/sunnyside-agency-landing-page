import "../sass/MobileMenu.scss";

// const MobileMenu = () => {
//   return (
//     <div className="mobileMenu">
//       <ul>
//         <li>About</li>
//         <li>Services</li>
//         <li>Projects</li>
//       </ul>
//       <button>Contact</button>
//     </div>
//   );
// };

// export default MobileMenu;

const MobileMenu = () => {
  return (
    <div className="mobile-menu-container">
      <div className="menu-item">About</div>
      <div className="menu-item">Services</div>
      <div className="menu-item">Projects</div>
      <button className="contact-button">Contact</button>
    </div>
  );
};

export default MobileMenu;
