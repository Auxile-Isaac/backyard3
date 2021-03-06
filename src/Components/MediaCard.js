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
import {useStateValue} from "../StateProvider";

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

export default function MediaCard({title, Ingredients, ImgUrl, Price, id, category}) {
  const classes = useStyles();

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () =>{
    // add item to basket
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
        id: id,
        category: category,
        ImgUrl: ImgUrl,
        title: title, 
        Price: Price
      }
    })
    alert("Product added to cart successfully !")
  };

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
        <Button size="small" color="primary" onClick={addToBasket}>
         <AddShoppingCartIcon/> Add to Cart 
        </Button>
      </CardActions>
    </Card>
  );
}