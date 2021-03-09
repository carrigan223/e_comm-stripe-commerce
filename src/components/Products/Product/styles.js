import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, //original width style
    maxWidth: "100%",
    border: "1px solid orange",
    borderRadius: "3%",
  },
  media: {
    height: 0,
    paddingTop: "75%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  description: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
