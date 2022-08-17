import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Nullimage from "../../components/Images/nullimage.png";
import { Row, Col } from "react-bootstrap";
import { Helmet } from 'react-helmet'
import { endpointPath } from "../../config/api";
import { header } from "../../config/config";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { IGlobalState } from "../../redux/types";


 const Header = styled.h1`
    text-align: center;
    margin-top: 120px;
    color: ${props => props.theme === "dark" ? "#fff": "#000"};
    margin-bottom: 20px;
`

 const Container = styled.div`
    width: 93%;
    padding-right: (1.5rem, 0.75rem);
    padding-left: (1.5rem, 0.75rem);
    margin-right: auto;
    margin-left: auto;
`


function News(props: any) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const theme = useSelector((state: IGlobalState) => state.themeMode)

  const capitaLize = (string: any) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const updatenews = async () => {
    try {
      props.setProgress(15);
      const response = await axios.get(endpointPath(props.category));
      setLoading(true);
      props.setProgress(70);
      const parsedData = response.data;
      setArticles(parsedData.results);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const response = await axios.get(endpointPath(props.category , page+ 1));
    setPage(page + 1);
    const parsedData = response.data;
    setArticles(articles.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
    <Helmet>
    <title>{capitaLize(props.category)} - Behzad News</title>
    </Helmet>
      <Header theme={theme}>
        {header(capitaLize(props.category))}
      </Header>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <Container>
          <Row>
            {articles.map((element: any) => {
              return (
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  style={{
                    marginTop: "10px",
                    marginBottom: "50px"
                  }}
                  key={element.link}
                >
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    author={element.creator ? element.creator[0]: ""}
                    pubDate={element.pubDate}
                    channel={element.source_id}
                    alt="Card image cap"
                    image_url={
                      element.image_url === null
                        ? Nullimage
                        : element.image_url
                    }
                    url={element.link}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "us",
  pageSize: 7,
  category: "general",
};
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };

export default News;
