import React from 'react';
import { Contact, Email, FooterDiv, Social } from './FooterStyling';
import { ReactComponent as Instagram } from '../../stuff/instagram.svg';
import { ReactComponent as Github } from '../../stuff/github.svg';
import { ReactComponent as Linkedin } from '../../stuff/linkedin.svg';
import { ReactComponent as Document } from '../../stuff/document.svg';
import resume from './../../stuff/DeenHaque2021.pdf';
const Footer = () => {
	const email = 'fardeen2000@hotmail.com';
	return (
		<FooterDiv>
			<Email>{email}</Email>
			<Contact>
				<Social src='https://www.github.com/deenhaque' contactme={Github} />
				<Social
					src='https://www.linkedin.com/in/deenhaque'
					contactme={Linkedin}
				/>
				<Social
					src='https://www.instagram.com/fardeen2000'
					contactme={Instagram}
				/>
				<Social src={resume} contactme={Document} />
			</Contact>
		</FooterDiv>
	);
};

export default Footer;
