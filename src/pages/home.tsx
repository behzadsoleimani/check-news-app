import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header'
import { tabList } from '../components/Header/tab-lists';
import { INewsItem } from "../types/shared"



const Home = () => {

    const [news, setNews] = useState<INewsItem[]>();
    const [value, setValue] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const getNews = () => {
        setLoading(true);
        setNews([])
        return fetch(
            `https://newsapi.org/v2/everything?q=${tabList[value].name || "politics"}&pageSize=10&apiKey=e35894b53c8d424387c2406d36370027`,
        )
            .then(response => response.json())
            .then(response => {
                setNews(response.articles);
                setLoading(false)
            });
    };

    useEffect(() => {
        getNews()
    }, [value]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <>
            <Header value={value} onChange={handleChange} />
            <div className="cards-wrapper" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                height: "80%"
            }
            }>
                {loading && <Box sx={{ display: 'flex' , alignItems: "center"}}>
                    <CircularProgress  />
                </Box>}
                {news ? news.map((item: INewsItem, index: number) => <Card key={index} data={item} />)
                    : <Box sx={{ display: 'flex' , alignItems: "center" }}>
                        <CircularProgress  />
                    </Box>}

            </div>
        </>
    )
}

export default Home;