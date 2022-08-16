import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar, Stack } from '@mui/material';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { tabList } from './tab-lists';
import { ITabPanel } from './type';
import { changeThemeMode } from "../../redux/action"
import Switch from '../Switch';
import styles from "./index.module.scss";
import { IGlobalState } from '../../redux/types';


let cx = classNames.bind(styles);

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Header({ value, onChange }: { value: number, onChange: (event: React.SyntheticEvent, newValue: number) => void }) {

  const dispatch = useDispatch();
  const theme = useSelector((state: IGlobalState) => state.themeMode)

  const handleToggle = (event: any) => {
    dispatch(changeThemeMode(event.target.checked))
  };

  return (
    <Box sx={{
      width: '100%',
      background: theme === "dark" ? "#097e51" : "#3fbd8d"

    }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack direction="row" spacing={2}
          className={cx("icon-header", theme === "dark" ? "icon-header--darktheme" : "")}>
          <Avatar alt="Behzad News" src="/logo192.png" style={{
            width: "4rem"
          }} />
          <Switch handleToggle={handleToggle} checked={theme === "dark"} />
        </Stack>
        <Tabs value={value} onChange={onChange} aria-label="basic tabs example" variant="scrollable"
          classes={{ root: cx("header-tab--container") }}

        >
          {tabList.map((tab: ITabPanel, index: number) => (
            <Tab key={index} label={tab.name} {...a11yProps(index)}
              className={value === index ? cx("tab-active") : ""} />
          ))}
        </Tabs>
      </Box>

    </Box>
  );
}
