import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

const style = {
  maxWidth: 400,
  color: "tomato",
};

const styleTwo = {
  background: "tomato",
  color: "white",
}

const CardPracticeFour = props => {
    return (
      <div>
        <Card style={style}>
          <CardHeader
            style={styleTwo}
            title="Card Practice Four"
            subheader="Inline"
          />  
          <p>Blah blah blah</p>  
        </Card>
      </div>
    );
}

export default CardPracticeFour;