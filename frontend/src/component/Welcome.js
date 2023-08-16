import { Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  container: {
    padding: "30px",
    minHeight: "93vh",
    backgroundImage: `url("https://www.concordia.ca/content/concordia/en/maps/buildings/ev/_jcr_content/content-main/image_1438381128.img.jpg/1668709060941.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlay: {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the opacity here (0.5 means 50% opacity)
  },
  whiteText: {
    position: "relative", // Add position: relative to adjust the text position within the container
    color: "white",
    zIndex: 2,
  },
  motivatingParagraph: {
    marginTop: "20px",
    fontSize: "18px",
    maxWidth: "800px",
    lineHeight: "1.6",
    fontStyle: "normal",
    padding: "20px", // Add some padding inside the box
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Add a subtle background color (white with opacity)
    borderRadius: "10px", // Add rounded corners for a softer look
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
  }
  
}));

const Welcome = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      
      className={classes.container}
    >
       
      <Grid item>
{/* Motivating Paragraph */}
        <Typography variant="h2" className={classes.whiteText}>
          WELCOME TO TEAM RED CAREER PORTAL
        </Typography>

      
      <Typography variant="body1" className={`${classes.whiteText} ${classes.motivatingParagraph}`}>
        "Welcome to Team Red Career Campus, where dreams take flight and
        opportunities abound. <br></br>
        Our platform is designed to empower job seekers
        and employers alike, providing a seamless experience for job hunting
        and posting. <br></br> <br></br> <br></br> 
        <Button  variant="contained"
            style={{ backgroundColor: "#8B4513", color: "white" }} onClick={() => handleClick("/login")}>
        Join us now and unlock a world of possibilities!"
            </Button>
      </Typography>
      </Grid>
      <div className={classes.overlay}></div>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <Grid item>
        <Typography variant="h2" className={classes.whiteText}>
          Error 404
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
