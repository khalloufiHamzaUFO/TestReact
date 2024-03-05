import React from "react";
import { AppBar, Toolbar, Box, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    component: {
        backgroundColor: "#FBF8F1",
        height: "auto"
    },
    headerBar: {
        backgroundColor: "#0c7894",
        height: 60,
        position: "static"
    },
    tabs: {
        color: "#FFFFFF",
        textDecoration: "none",
        marginRight: 20,
        fontSize: 20
    }
});

const Navbar = () => {
    const classname = useStyles();
    return (
        <Box className = { classname.component } >
            <AppBar position = "static" className = { classname.headerBar } >
                <Toolbar > 
                    <NavLink to = "./" className = { classname.tabs } > Home < /NavLink> 
                    <NavLink to = "all" className = { classname.tabs } > All Competitions < /NavLink>
                    <NavLink to = "add" className = { classname.tabs } > Add Competition < /NavLink>
                </Toolbar > 
            < /AppBar > 
        < /Box >
    );
};

export default Navbar;
