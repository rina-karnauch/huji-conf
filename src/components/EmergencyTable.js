import './EmergencyTable.css';
import * as React from "react";
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ConfessionTableTitle from "./ConfessionTable/ConfessionTableTitle";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const EmergencyTable = () => {
    return (
        <div className="content-table">
            <ConfessionTableTitle title="Emergency Hotlines" icon={<AddIcCallTwoToneIcon/>}/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ContactsOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Eran ער״ן"
                                  secondary={
                                      <ul>
                                          <a href="https://www.eran.org.il/">website</a> <br/>
                                          <a href="https://www.eran.org.il/">phone-number</a>
                                      </ul>
                                  }/>
                </ListItemButton>
            </ListItem>
            ער"ן - עזרה ראשונה נפשית, https://www.eran.org.il/, טלפון: 1201.
            סהר - סיוע והקשבה ברשת, https://sahar.org.il/, יצירת קשר דרך האתר.
            מרכזי הסיוע לנפגעי ולנפגעות תקיפה מינית, https://www.1202.org.il/
            -אם אתם מרגישים שאתם "הולכים/ות לאיבוד" באוניברסיטה, נתקלים בקשיים אקדמיים או קשיים נוספים להם לא מצאתם מענה
            תוכלו לפנות ליחידה לשוויון הזמנויות בלינק הזה-https://forms.gle/njvhghR5vwhprqTLA
            בנוסף ניתן לפנות לדיקן הסטודנטים בלינק הזה-https://sf_prod_bg.formtitan.com/ftbe37b9791569231113071#/
        </div>
    );
}

export default EmergencyTable;