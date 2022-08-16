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


export default function CardComponent({ data }: { data: INewsItem }) {

    return (
        <Card sx={{
            maxWidth: 345, margin: "1rem", backgroundColor: "#fafafa",
            position: "relative"
        }}>
            <CardHeader
                style={{
                    height: "20%",
                    cursor: "pointer"
                }}

                title={<a 
                    style={{
                        textDecoration: "none",
                        color: "rgba(0 , 0 ,0 , 0.87)"
                    }}
                    href={data.url} target="_blank">{cutStr(data.title)}</a>}
            />
            <a  href={data.url} target="_blank">
            <CardMedia
                component="img"
                height="194"
                image={data.urlToImage}
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
                    {new Date(data.publishedAt).toISOString().slice(0, 10)}
                </Typography>
            </CardActions>
        </Card>
    );
}
