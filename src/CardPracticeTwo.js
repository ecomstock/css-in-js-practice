import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

const styles = {
  card: {
    maxWidth: 400,
  },
}

const CardPracticeTwo = props => {
    return (
      <div>
        <Card className={props.classes.card}>
          <CardHeader
            title="Card Practice"
            subheader="Two"
          />    
        </Card>
      </div>
    );
}

export default withStyles(styles)(CardPracticeTwo);