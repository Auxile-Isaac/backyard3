import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginBottom: "25px",
    marginRight: "5px"
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({title, Ingredients, ImgUrl, Price}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ImgUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">Ingredients: {Ingredients}</Typography>
          <h5>Rwf {Price}</h5>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         <AddShoppingCartIcon/> Add to Cart 
        </Button>
      </CardActions>
    </Card>
  );
}