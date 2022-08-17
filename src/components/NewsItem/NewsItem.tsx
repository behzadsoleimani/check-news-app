import React from "react";
import { Button, Card } from "react-bootstrap";
import Details from "./Details";
import { cutStr } from "../../utils/helper"
import styled from "styled-components";
import { INewsItem } from "../../types/shared";
import { IGlobalState } from "../../redux/types";
import { useSelector } from "react-redux";

export const StyledCard = styled(Card)`
border-radius: 15px;
background-color: ${props => props.theme === "dark" ? "rgb(41, 47, 51)" : "#f8f8f8"};
color: ${props => props.theme === "dark" ? "#fff" : "#161515"};
`

export const StyledImg = styled(Card.Img)`
border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 15em
`

export const StyledTitle = styled(Card.Title)`
font-size: 1em

`

export const StyledText = styled(Card.Text)`
color: ${props => props.theme === "dark" ? "#b6b4b4" : "#1f1e1e"};
    min-height: 3em
`

export const StyledButton = styled(Button)`

border-radius: 12px;
font-weight: bold;
color: #fff;
box-shadow: 0 30px 36px 0 rgba(0, 0, 0, 0.2)
`

function NewsItem(props: INewsItem) {
  const { image_url, alt, description, title, author, channel, pubDate, url } = props;
  const theme = useSelector((state: IGlobalState) => state.themeMode)

  return (
    <>
      <StyledCard theme={theme} >
        <StyledImg   variant="top" src={image_url} alt={alt} />
        <Card.Body>
          <StyledTitle >{cutStr(title)}</StyledTitle>
          <StyledText theme={theme} >
            {cutStr(description , 90)}
          </StyledText>
          <Details author={author} channel={channel} date={pubDate} />
          <StyledButton variant={theme === "dark"? "primary" :"danger"} href={url} target="_blank" >Read more →</StyledButton>
        </Card.Body>
      </StyledCard>
    </>
  );
}

export default NewsItem;
