'use client'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'; // Import Button component
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AddProductState } from '@/store/state/addproduct.state';
import { Dispatch } from '@reduxjs/toolkit';
import { AddProductValid } from '@/store/type/addproduct.types';
import { setProductDetils } from '@/store/action/addproduct.action';
import { log } from 'console';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
    position: 'relative',
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {

    const product = useSelector((state: AddProductState) => state.myproduct)
    const dispatch = useDispatch<Dispatch<AddProductValid>>();
   
    const handleSubmit = () => {
        
        const nextId = Object.keys(product).length;
        const updatedProduct = {
            ...product,
            [nextId]: {
                id: nextId,
                title: product.title || '',
                price: product.price || 0,
                rating: {
                    rate: product.rating?.rate || 0,
                    count: product.rating?.count || 0
                }
            }
        };
        dispatch(setProductDetils(updatedProduct));
    };


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex ' }}>
            <Button className=' h-12'
                variant="outlined"
                color="primary"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: 'none' }) }}
            >
                Add Product
            </Button>
            <Main open={open}>
                <DrawerHeader />
            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <Button onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </Button>
                </DrawerHeader>
                <Divider />
                <List className="grid pl-4 justify-center">
                    <b>Enter the Product Details</b>
                    <div className=" pt-4"><TextField className="w-64" label="Product Id" type="number" variant="outlined" value={product.id ?? ""}
                        onChange={(ele) => {
                            product.id = Number(ele.target.value)
                            //dispatch(setProductDetils(product))
                        }}
                    ></TextField></div>
                    <div className=" pt-4"><TextField className="w-64" label="Title" variant="outlined" value={product.title ?? ""}
                        onChange={(ele) => {
                            product.title = (ele.target.value)
                           //dispatch(setProductDetils(product))
                        }}
                    ></TextField></div>
                    <div className=" pt-4"><TextField className="w-64" label="Price" type="number" variant="outlined" value={product.price ?? ""}
                        onChange={(ele) => {
                            product.price = Number(ele.target.value)
                            //dispatch(setProductDetils(product))
                        }}
                    ></TextField></div>
                    <div className=" pt-4"><TextField className="w-64" label="Rating" type="number" variant="outlined" value={product.rating?.rate ?? ""}
                        onChange={(ele) => {
                            if (product.rating) {
                                product.rating.rate = Number(ele.target.value);
                               //dispatch(setProductDetils(product));
                            }
                        }}
                    ></TextField></div>
                    <div className=" pt-4"><TextField className="w-64" label="Count" type="number" variant="outlined" value={product.rating?.count ?? ""}
                        onChange={(ele) => {
                            if (product.rating) {
                                product.rating.count = Number(ele.target.value);
                                //dispatch(setProductDetils(product));
                            }
                        }}
                    ></TextField></div>
                    <div className="pt-96"><Button className="w-64" variant="outlined" onClick={handleSubmit}>Submit</Button></div>
                </List>
            </Drawer>
        </Box>
    );
}