import React from 'react'
import RatedStars from "../components/RatedStars"

import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	RatedStars:{
			width:"95%",
		
		[theme.breakpoints.up("sm")]: {
		
			  width: "50%",
			maxWidth: "530px",
			height: "180px",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
		}
	}

}));

const RatedStarsContainer = () => {
  	const classes = useStyles();

	return(
		<div className={classes.RatedStars}>
			<RatedStars 
			stars="5"
			description="Rated 5 Stars in Reviews"
			/>

			<RatedStars 
			stars="5"
			description="Rated 5 Stars in Report Guru"
			/>

			<RatedStars 
			stars="5"
			description="Rated 5 Stars in BestTech"
			/>

		</div>
	)
}

export default RatedStarsContainer