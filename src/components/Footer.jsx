import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   return (
     <footer style={{ display: 'flex', justifyContent: 'center', padding: '10px', marginTop: '10px' }}>
       <div className="footerStyle">
         <div className="iconos">
           <FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: '#edeef3', margin: '0 10px' }} />
           <FontAwesomeIcon icon={faFacebook} size="1x" style={{ color: '#d7dce5', margin: '0 10px' }} />
           <FontAwesomeIcon icon={faTwitter} size="1x" style={{ color: '#eaecf1', margin: '0 10px' }} />
         </div>
         <p>@mammaMía.cl</p>
       </div>
     </footer>
   );
 };
 
 export default Footer;
 