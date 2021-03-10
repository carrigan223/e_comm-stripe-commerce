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

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} elevation={20}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />{" "}
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom className={classes.title}>
              {product.name}
            </Typography>
          </div>
          {/* <div>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div> */}
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
