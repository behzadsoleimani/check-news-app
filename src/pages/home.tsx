import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header'
import { INewsItem } from "../types/shared"



const Home = () => {

    const [news, setNews] = useState<INewsItem[]>();
    const getNews = () => {
        return fetch(
            'https://newsapi.org/v2/everything?q=economy&pageSize=10&apiKey=e35894b53c8d424387c2406d36370027',
        )
            .then(response => response.json())
            .then(response => {
                setNews(response.articles);
            });
    };

    useEffect(() => {
        getNews()
    }, [])


    return (
        <>
            {/* <Header /> */}
            <div className="cards-wrapper" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly"
            }
            }>
                {news && news.map((item: INewsItem , index: number) => <Card key={index} data={item} />)
                }
            </div>
        </>
    )
}

export default Home;