import React, {useState} from 'react';
import MobileMenu from './MobileMenu';
import WebMenu from './WebMenu';

const Header = () => {
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	const handleOpenMenu = (): void => {
		setIsMobileOpen(!isMobileOpen);
	};

	const web = (
		<WebMenu isMobileOpen={isMobileOpen} handleOpenMenu={handleOpenMenu} />
	);
	const mobile = (
		<MobileMenu isMobileOpen={isMobileOpen} handleOpenMenu={handleOpenMenu} />
	);

	return isMobileOpen ? mobile : web;
};

export default Header;
