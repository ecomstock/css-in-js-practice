import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

const CardPractice = props => {
  
  const { classes } = props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title="Card Practice"
            subheader="One"
          />
          <TextField
            className={classes.textField}
            id="name"
            label="Name"
            margin="normal"
          />    
        </Card>
      </div>
    );

}

export default withStyles(styles)(CardPractice);