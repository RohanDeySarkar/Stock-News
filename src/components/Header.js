import React, { useState } from 'react';
import './Header.css';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useDispatch } from 'react-redux';

import {changeCompany} from "../features/stockSlice";

import {companies} from '../data';

function Header() {
    const dispatch = useDispatch();

    const [currCompany, setCurrCompany] = useState("Tesla");

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const selectCompany = (company) => {
        setCurrCompany(company.name);
        dispatch(changeCompany(company));
        handleClose();
    };

    

    return (
        <div className="header">
            <div className="header__left">
                <h1>Stock Exchange News on</h1>
            </div>

            <div className="header__right">
                <Button
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <h3>{currCompany}</h3>
                </Button>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                >
                    {companies.map((company) => (
                        <MenuItem
                            id={company.id}
                            onClick={() => selectCompany(company)}
                        >
                            <p style={{"textTransform": "uppercase"}}>{company.name}</p>
                        </MenuItem>
                    ))}
                    
                </Menu>
            </div>
        </div>
    )
}

export default Header
