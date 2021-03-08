import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} elevation={20}>
        <CardMedia
          img={product.image}
          title={product.name}
          className={classes.media}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom className={classes.title}>
              {product.name}
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.description}
            >
              {product.description}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <Typography variant="h5">${product.price}</Typography>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
