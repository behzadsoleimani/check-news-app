import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { INewsItem } from "../../types/shared"
import { cutStr } from '../../utils/helper';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../redux/types';


export default function CardComponent({ data }: { data: INewsItem }) {
    const theme = useSelector((state: IGlobalState) => state.themeMode)

    return (
        <Card sx={{
            maxWidth: 345, margin: "1rem",
            backgroundColor: theme === "dark" ? "#baf29c" : "#cfebc0",
            position: "relative"
        }}>
            <CardHeader
                style={{
                    height: "20%",
                    cursor: "pointer",
                    margin: "1rem 0"
                }}

                title={<a
                    rel="noreferrer"
                    style={{
                        textDecoration: "none",
                        color: "rgba(0 , 0 ,0 , 0.87)"
                    }}
                    href={data.link} target="_blank" >{cutStr(data.title)}</a>}
            />
            <a href={data.link} target="_blank" rel="noreferrer">
                <CardMedia
                    component="img"
                    height="194"
                    image={data.image_url}
                    alt={data.author}
                    style={{
                        cursor: "pointer"
                    }}
                />
            </a>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {cutStr(data.description, 100)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing >
                <IconButton aria-label="share" sx={{
                    position: "absolute",
                    bottom: 5,
                    right: 5
                }}>
                    <BookmarkBorderOutlinedIcon />
                </IconButton>
                <Typography variant="body2" color="text.secondary" sx={{
                    position: "absolute",
                    bottom: 10,
                    left: 5
                }}>
                    {data.pubDate.split(" ")[0]}
                    {/* {new Date(data.publishedAt).toISOString().slice(0, 10)} */}
                </Typography>
            </CardActions>
        </Card>
    );
}
