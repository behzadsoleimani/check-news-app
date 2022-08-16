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