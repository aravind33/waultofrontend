import "./styles3.css"
import React from 'react';
import { SocialIcon } from 'react-social-icons';



import Link from 'next/link'


const footer = () => {

    return (
        <div className="footer-distributed">
         	<div className="footer-left">
          
				<img id="foot-img" src="/waulto.png" alt="W A U L T O"  />

				<div className="footer-links">
					<div>
                		<Link href="/">
							<a>Home</a>
						</Link>
					</div>
					<div>
						<Link href="/blogs">
							<a>Blogs</a>
						</Link>
					</div>	
				</div>
			</div>

			<div className="footer-center">
				<div style={{color:'white', fontSize:'20px'}}>
					Contact Us:
				</div>
				<div id="footer-mail">
					<a id="mail" href="mailto:waulto.ed@gmail.com" title="Send a mail to Waulto">waulto.ed@gmail.com</a>
				</div>
			</div>
            <div className="footer-right mail">
            	<div className="footer-text">
                	Follow Us:
            	</div>
				<div className="footer-icons">
					<SocialIcon url="https://www.youtube.com/almost-everything" fgColor="white" bgColor="black" className="icon"/>
                    <SocialIcon url="https://twitter.com/Waulto1" fgColor="white" bgColor="black" className="icon"/>
                    <SocialIcon url="https://www.linkedin.com/company/waulto/" bgColor="black" fgColor="white" className="icon"/>
				</div>
				<a href="/privacy" className="privacyfoot">Privacy Policy</a>
            </div>
                
 	</div>
	);
};

export default footer;