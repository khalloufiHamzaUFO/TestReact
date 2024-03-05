import React, { useEffect, useState } from "react";
import {Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom"
import {getCompetions} from "../Serivce/Api.js";

const useStyles = makeStyles({
    table: {
        width: "85%",
        margin: "50px 0 0 50px"
    },
    thead: {
        "& > *": {
            color: "#000000",
            backgroundColor: "#0DCAF0"
        }
    },
    tbody: {}
});

const AllCompetitions = () => {
    const classname = useStyles();
    const [addData, setAddData] = useState([]);
    useEffect(() => {
        getAllCompetitions();
    }, []);

    const getAllCompetitions= async () => {
        const response = await getCompetions();
        console.log(response.data);
        setAddData(response.data);
    };


    return (
        <Table className={classname.table}>
            <TableHead className={classname.thead}>
                <TableRow>
                    <TableCell> # </TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell> Fees </TableCell>
                    <TableCell> Date </TableCell>
                    <TableCell> DETAILS </TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            </TableHead>
            <TableBody className={classname.tbody}>
                { addData.map((competition) => (
                    // eslint-disable-next-line react/jsx-key
                    <TableRow>
                        <TableCell> {competition.id} </TableCell>
                        <TableCell> {competition.name} </TableCell>
                        <TableCell> {competition.fees} </TableCell>
                        <TableCell> {competition.date} </TableCell>
                        <TableCell>
                            <Button variant="contained" color="Primary" component={Link} style={{ marginRight: "15px" }} to={`/edit/${competition.id}`} >
                                details
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AllCompetitions;
