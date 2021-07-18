import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Link } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useStyles } from './styles';
import { card } from './Card';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        primesoft
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, tempora ullam? Tempora tempore, perferendis assumenda obcaecati dolores accusamus iure sunt ducimus corrupti ea tenetur at.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photo's
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photo's
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {card.map(({ id, title, line, image, btn1, btn2 }) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography>
                      {line}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={btn1}>
                      View
                    </Button>
                    <Button size="small" color="primary" href={btn2}>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <PhotoCamera className={classes.icon} />
        <Typography variant="h6">
          Photo Album
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          studay UI/UX design
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}

export default App;
