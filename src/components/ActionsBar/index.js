import React from "react";
import { withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";

import { connect } from "react-redux";
import screenfull from "screenfull";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import { Link } from 'gatsby'

import {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease,
  setCategoryFilter
} from "@store/actions";
import FontSetter from "./FontSetter";
import CategoryFilter from "./CategoryFilter";

const styles = theme => ({
  actionsBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    left: 0,
    //top: `calc(100vh - ${theme.bars.sizes.actionsBar}px)`,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    padding: `0 ${theme.base.sizes.linesMargin}`,
    justifyContent: "space-between",
    height: `${theme.bars.sizes.actionsBar}px`,
    width: "100%",
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      top: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `0 calc(${theme.base.sizes.linesMargin} * 1.5)`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column",
      top: 0,
      right: 0,
      left: "auto",
      height: "100%",
      padding: `${theme.base.sizes.linesMargin} 0`,
      width: `${theme.bars.sizes.actionsBar}px`,
      "&::before": {
        top: theme.base.sizes.linesMargin,
        bottom: theme.base.sizes.linesMargin,
        left: 0,
        right: "auto",
        width: 0,
        height: "auto",
        borderLeft: `1px solid ${theme.base.colors.lines}`
      }
    }
  },
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column"
    }
  },
  button: {
    color: theme.bars.colors.icon
  }
});

class ActionsBar extends React.Component {
  state = {
    fullscreen: false
  };

  componentDidMount() {
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        this.setState({
          fullscreen: screenfull.isFullscreen
        });
      });
    }
  }

  fullscreenOnClick = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };

  arrowUpOnClick = () => {
    this.props.setScrollToTop(true);
  };

  fontSetterOnClick = val => {
    this.props.setFontSizeIncrease(val);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("font-size-increase", val);
    }
  };

  categoryFilterOnClick = val => {
    this.props.setCategoryFilter(val);
  };

  homeOnClick = () => {
    this.props.setNavigatorPosition('is-featured')
    this.props.setNavigatorShape('closed')
  }

  arrowUpOnClick = () => {
    this.props.setScrollToTop(true);
  };

  render() {
    const { classes, navigatorPosition, navigatorShape, categories } = this.props;
    console.log(navigatorPosition)
    console.log(navigatorShape)
    return (
      <div className={classes.actionsBar}>
        <div className={classes.group}>
          <Link to="/">
            <IconButton
              aria-label="Back to list"
              onClick={this.homeOnClick}
              title="Back to the list"
              className={classes.button}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          {((navigatorShape === "open") || navigatorPosition !== "is-aside") && (
            <CategoryFilter
              categories={categories}
              filterCategory={this.categoryFilterOnClick}
            />
          )}
          <IconButton
            aria-label="Search"
            //onClick={this.searchOnClick}
            component={Link}
            data-shape="closed"
            to="/search/"
            title="Search"
            className={classes.button}
          >
            <SearchIcon className={classes.button} />
          </IconButton>
        </div>
        <div className={classes.group}>
          {navigatorPosition === "is-aside" && <FontSetter increaseFont={this.fontSetterOnClick} />}
          {screenfull.isEnabled && (
            <IconButton
              aria-label="Fullscreen"
              onClick={this.fullscreenOnClick}
              title="Fullscreen mode"
              className={classes.button}
            >
              {this.state.fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          )}
          <IconButton aria-label="Back to top" onClick={this.arrowUpOnClick} title="Scroll to top">
            <ArrowUpwardIcon className={classes.button} />
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.reducers.navigatorPosition,
    navigatorShape: state.reducers.navigatorShape,
    categoryFilter: state.reducers.categoryFilter
  };
};

const mapDispatchToProps = {
    setNavigatorPosition,
    setNavigatorShape,
    setScrollToTop,
    setFontSizeIncrease,
    setCategoryFilter
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ActionsBar));
