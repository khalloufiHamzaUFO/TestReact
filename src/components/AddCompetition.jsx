import React, { useState } from "react";
import { Box, makeStyles, FormGroup, FormControl, InputLabel, Input, Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import {addCompetion} from "../Serivce/Api.js";

const useStyles = makeStyles({
    container: {
        width: "50%",
        margin: "5% 0 0 25%",
        "& > *": {
            marginTop: "20px"
        }
    },
    button: {
        backgroundColor: "#0DCAF0"
    }
});

const initialValues = {
    name: "",
    fees: "",
    date: "",
    participants: "",
    description: ""
};

const AddCompetition = () => {
    const [competition, setCompetition] = useState(initialValues);
    const { name, fees, date, participants ,description} = competition;
    const classname = useStyles();
    const history = useNavigate();

    const valueChange = (e) => {
        console.log(e.target.value);
        setCompetition({ ...competition, [e.target.name]: e.target.value });
    };

    const addUserDetail = async () => {
        await addCompetion(competition);
        history("/all");
    };

    return (
        <Box>
            <FormGroup className={classname.container}>
                <Typography variant="h3"> Add User </Typography>
                <FormControl>
                    <InputLabel> Name </InputLabel>
                    <Input onChange={(e) => valueChange(e)} name="name" value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel> Fees </InputLabel>
                    <Input
                        onChange={(e) => valueChange(e)}
                        name="fees"
                        value={fees}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel> Date </InputLabel>
                    <Input onChange={(e) => valueChange(e)} name="date" value={date} />
                </FormControl>
                <FormControl>
                    <InputLabel> Participants </InputLabel>
                    <Input onChange={(e) => valueChange(e)} name="participants" value={participants} />
                </FormControl>
                <FormControl>
                    <InputLabel> Description </InputLabel>
                    <Input onChange={(e) => valueChange(e)} name="description" value={description} />
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addUserDetail()}
                >
                    Add User
                </Button>
            </FormGroup>
        </Box>
    );
};

export default AddCompetition;
