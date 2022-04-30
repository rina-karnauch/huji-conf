import * as React from "react";
import {useEffect, useState} from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import GridList from '@material-ui/core/GridList';
import {lightTheme} from "../../themes/lightTheme";
import {darkTheme} from "../../themes/darkTheme";
import {styled} from "@mui/material/styles";
import './FilterTable.css';


const FilterTable = (props) => {

    // hooks
    const [confessions, setConfessions] = useState([]);

    useEffect(() => {
        async function getConfessions() {
            const response = await fetch(`http://localhost:5000/record/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const confs = await response.json();
            setConfessions(confs);
        }

        getConfessions();
    }, [confessions]);

    // theme
    function renderTheme() {
        let root = document.documentElement;

        if (props.theme === 'light') {
            root.style.setProperty('--confession-table-bg', lightTheme.confessionBG);
            root.style.setProperty('--confession-table-border', lightTheme.confessionBorder);
            root.style.setProperty('--confession-table-title', lightTheme.confessionTitle);
        } else {
            root.style.setProperty('--confession-table-bg', darkTheme.confessionBG);
            root.style.setProperty('--confession-table-border', darkTheme.confessionBorder);
            root.style.setProperty('--confession-table-title', darkTheme.confessionTitle);
        }
    }

    async function deleteConfession(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });

        const newConfs = confessions.filter((el) => el._id !== id);
        setConfessions(newConfs);
    }

    // component styling
    const ConfessionCard = (props) => {
        return (
            <div
                className="conf-card"
                key={props.key}>
                {props.text}
                <div className="footer">
                    <ButtonStyled>
                        <DeleteIcon onClick={() => deleteConfession(props.id)}/>
                    </ButtonStyled>
                </div>
            </div>
        );
    }

    // styling of IconButton
    const ButtonStyled = styled(IconButton)(({theme}) => ({
        color: 'var(--confession-table-title)',
        top: '-3px',
        margin: '5px',
        fontSize: '30',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'red',
        },
    }));


    // rendering
    renderTheme();
    return (
        <GridList
            className="conf-grid"
            cols={3}
        >
            {
                confessions.map(
                    (confession) => {
                        return (
                            <ConfessionCard
                                text={confession.text}
                                key={confession._id}
                                id={confession._id}
                            />);
                    }
                )
            }
        </GridList>
    );
}

export default FilterTable;