/*import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import FacebookProvider, { Comments } from "react-facebook";
require("core-js/fn/array/find");

import config from "../../../content/meta/config";

const styles = theme => ({
  postComments: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd"
  }
});

const PostComments = props => {
  const { classes, slug, facebook } = props;

  return (
    <div id="post-comments" className={classes.postComments}>
      <FacebookProvider appId={facebook}>
        <Comments
          href={`${config.siteUrl}${slug}`}
          width="100%"
          colorScheme={props.theme.main.colors.fbCommentsColorscheme}
        />
      </FacebookProvider>
    </div>
  );
};

PostComments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  facebook: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostComments);
*/


import React, {useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    postComments: {
      margin: "3em 0 0",
      padding: "3em 0 0",
      borderTop: "1px solid #ddd"
    }
});

const insertScript = (src, id, parentElement) => {
  const script = window.document.createElement('script');
  script.async = true;
  script.src   = src;
  script.id    = id;
  parentElement.appendChild(script);
return script;
};


const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id);
  if (script) {
    parentElement.removeChild(script);
  }
};


const PostComments = ({classes, slug}) => {
  useEffect(() => {
    if (! window) {
      return;
    }
    const document = window.document;
    if (document.getElementById('commento')) {
      insertScript(`https://cdn.commento.io/js/commento.js`, `commento-script`, document.body);
    }
    return () => removeScript(`commento-script`, document.body);
  }, [slug]);
return <div className={classes.postComments} id={`commento`} />
};
export default withStyles(styles)(PostComments)