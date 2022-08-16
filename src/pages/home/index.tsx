import { Box, checkboxClasses, CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header'
import { tabList } from '../../components/Header/tab-lists';
import { INewsItem } from "../../types/shared"
import classNames from 'classnames/bind';
import styles from "./index.module.scss"
import { IGlobalState } from '../../redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeMode } from '../../redux/action';


let cx = classNames.bind(styles);



const Home = () => {
    const [news, setNews] = useState<INewsItem[]>();
    const [value, setValue] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();
    const theme = useSelector((state: IGlobalState) => state.themeMode)


    const getNews = () => {
        setLoading(true);
        setNews([])
        return fetch(`https://newsdata.io/api/1/news?category=${tabList[value].name}&page=1&language=en&apikey=pub_10284d8ed0f5f35c3af43cdc38776d61b9242`
        )
            .then(response => response.json())
            .then(response => {
                setNews(response.results);
                setLoading(false)
            });
    };

    useEffect(() => {
        getNews()
    }, [value]);

    useLayoutEffect(() => {
        if (localStorage.getItem("theme-mode")) {
            const initTheme = JSON.parse(localStorage.getItem("theme-mode") as string);
            dispatch(changeThemeMode(initTheme === "dark" ? true : false))
        }
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Grid container={true} className={cx("home-parent", !loading ? "home-parent--complete" : "",
            theme === "dark" ? "home-parent--dark" : "")}>
            <Header value={value} onChange={handleChange} />
            <div className="cards-wrapper" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                height: "80%"
            }
            }>
                {loading && <Box sx={{ display: 'flex', alignItems: "center" }}>
                    <CircularProgress />
                </Box>}
                {news ? news.map((item: INewsItem, index: number) => <Card key={index} data={item} />)
                    : <Box sx={{ display: 'flex', alignItems: "center" }}>
                        <CircularProgress />
                    </Box>}

            </div>
        </Grid>
    )
}

export default Home;