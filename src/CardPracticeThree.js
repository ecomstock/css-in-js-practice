import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

const styles = {
  root: {
    maxWidth: 400,
  },
  header: {
    background: "tomato",
  },
  title: {
    color: "white",
  },
};

const CardPracticeThree = props => {
    return (
      <div>
        <Card classes={{
          root: props.classes.root,
        }}>
          <CardHeader 
            classes={{
              title: props.classes.title,
              root: props.classes.header,
            }}
            title="Card Practice"
            subheader="Three"
          />  
          <p>Blah blah blah</p>  
        </Card>
      </div>
    );
}

export default withStyles(styles)(CardPracticeThree);