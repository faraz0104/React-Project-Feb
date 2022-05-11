
import React from 'react'
import { Button, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme => ({
    container: {
        paddingTop: "10px",
        
    },
    media: {
        height: "250px",
    },
    card:{
        marginBottom:theme.spacing(5),
    },
})))

function Post() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image="https://geographical.co.uk/media/k2/items/cache/852c2fa5e5468761c3ae8b796ca9be85_XL.jpg"
                    title="My Post" />
                <CardContent>
                    <Typography gutterBottom variant="h5" >My First Post</Typography>
                    <Typography variant="body" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,<br></br> remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,<br></br> remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Post