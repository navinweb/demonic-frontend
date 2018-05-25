import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
};

class App extends Component {
  render() {
    return (<Card style={styles.card}>
      <CardMedia
        style={styles.media}
        image={this.props.image}
        title="Чернобог (Czorneboh, Czernebog)"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {this.props.title}
        </Typography>
        <Typography component="p">
          {this.props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Поделиться
          </Button>
        <Button size="small" color="primary">
          Читать
          </Button>
      </CardActions>
    </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.get('title'),
  content: state.get('content'),
  image: state.get('image')
})

export default connect(mapStateToProps)(App);