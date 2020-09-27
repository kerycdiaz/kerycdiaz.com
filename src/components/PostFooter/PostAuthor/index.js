import React from "react";
import { withStyles } from '@material-ui/core/styles'
import Avatar from "@material-ui/core/Avatar";

import config from "@data/SiteConfig";
import avatar from "@assets/keryc-diaz.jpg";

const styles = theme => ({
  author: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& a": {
      color: theme.base.colors.link
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      flexDirection: "row",
      justifyContent: "center"
    }
  },
  avatar: {
    margin: "0 1em 1em",
    borderRadius: "75% 65%",
    width: "60px",
    height: "60px",
    border: "1px solid #ddd",
    flexShrink: 0,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 1em 0"
    }
  },
  box: {
    display: "flex",
    flexDirction: "column",
    minHeight: "50px",
    alignItems: "center"
  }
});

const PostAuthor = ({ classes, author }) => {
  return (
    <div className={classes.author}>
      <Avatar src={avatar} className={classes.avatar} alt={config.authorName} />
      <div className={classes.box} dangerouslySetInnerHTML={{ __html: author.html }} />
    </div>
  );
};


export default withStyles(styles)(PostAuthor);