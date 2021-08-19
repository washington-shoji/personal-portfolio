import React, {useState} from 'react';
import NoMenu from './NoMenu';
//import MobileMenu from './MobileMenu';
//import WebMenu from './WebMenu';

const Header = () => {
	return <NoMenu />;
	// const [isMobileOpen, setIsMobileOpen] = useState(false);

	// const handleOpenMenu = (): void => {
	// 	setIsMobileOpen(!isMobileOpen);
	// };

	// const web = (
	// 	<WebMenu isMobileOpen={isMobileOpen} handleOpenMenu={handleOpenMenu} />
	// );
	// const mobile = (
	// 	<MobileMenu isMobileOpen={isMobileOpen} handleOpenMenu={handleOpenMenu} />
	// );

	// return isMobileOpen ? mobile : web;
};

export default Header;
