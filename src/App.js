import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import RetinaImage from 'react-retina-image';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { white, amber, red } from 'material-ui/colors';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    width: '100%',
    height: 'auto',
  },
};

const theme = createMuiTheme({
  palette: {
    primary: white,
    accent: amber,
    error: red,
    type: 'light',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Card style={styles.card}>
          {/* <RetinaImage src={this.props.image} alt={this.props.title} style={styles.media} /> */}
          <img src={this.props.image} alt={this.props.title} style={styles.media} />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">{this.props.content}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Поделиться
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={this.props.onClickLearn}
            >
              Читать
            </Button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.get('title'),
  content: state.get('content'),
  image: state.get('image'),
});

const mapDispatchToProps = (dispatch) => ({
  onClickLearn: () =>
    dispatch({
      type: 'LEARN MORE',
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
