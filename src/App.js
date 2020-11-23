import React  from "react"; 
import theme from './theme';
import { ThemeProvider,
					makeStyles }
from "@material-ui/core/styles";

import CardsContainer from './containers/CardsContainer'
import RatedStarsContainer from './containers/RatedStarsContainer'
import BodyCopy from './components/BodyCopy'
import bgMobilesBottom from './images/bg-pattern-bottom-mobile.svg'
import bgMobilesTop from './images/bg-pattern-top-mobile.svg'
import bgDesktopBottom from './images/bg-pattern-bottom-desktop.svg'
import bgDesktopTop from './images/bg-pattern-top-desktop.svg'

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: "15px",

		[theme.breakpoints.up("sm")]: {
			margin: "0 auto",
			width: "100%",
			maxWidth: "1024px",

		}
	},

	fondo: {
		background: `url(${bgMobilesTop}) no-repeat top left, url(${bgMobilesBottom}) no-repeat  bottom right`,

		[theme.breakpoints.up("sm")]: {
			background: `url(${bgDesktopTop}) no-repeat top left, url(${bgDesktopBottom}) no-repeat  bottom right`,
		}
	},
	
	description: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingTop: "120px",
		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
			paddingTop: "5rem",

		},


	}

}));

const App = () => {
  const classes = useStyles();

	return(
			<ThemeProvider theme={theme}>
				<div className={classes.fondo}>
					<div className={classes.root}>

						<div className={classes.description}>
							<BodyCopy />
							<RatedStarsContainer/>
						</div>
						
						<CardsContainer/>

					</div>
				</div>
		</ThemeProvider>
	)
};

export default App;



