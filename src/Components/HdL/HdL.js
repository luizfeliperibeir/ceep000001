import { Button, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import UserAvatar from '../Avatar/Avatar';

const HdL = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenMenu = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleCloseMenu = (e) => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		localStorage.clear();
		window.location.href = '/';
	};

	return (
		<>
			<Button variant="text" onClick={handleOpenMenu}>
				<UserAvatar avatarInitial="OA" />
			</Button>
			<Menu
				variant="selectedMenu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
			>
				<MenuItem type="submit" onClick={handleLogout}>
					Sair
				</MenuItem>
			</Menu>
		</>
	);
};

export default HdL;