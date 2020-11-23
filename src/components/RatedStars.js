import React from 'react'
import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	cardStar: {
		backgroundColor: theme.palette.Neutral.lightGrayishMagenta,
		color: theme.palette.Primary.veryDarkMagenta,
		fontWeight: "700",
		borderRadius: "10px",
		textAlign: "center",
		padding: "1rem 3rem 1rem 2rem",
		marginBottom: "20px",

		[theme.breakpoints.up("sm")]: {

		    display: "flex",
			
			"&:nth-child(1)":{
     			alignSelf: "flex-start"
				
     		},

     		"&:nth-child(2)":{
     			alignSelf: "center"
     		},

     		"&:nth-child(3)":{
     			alignSelf: "flex-end"

     		},
		},



	},

	cardStarContainer: {
		paddingRight: "10px"
	},



}));




const RatedStars = ({description, stars}) => {
  
  	const classes = useStyles();


	const getStar = (num) => {
		let star = parseInt(num)
		let cantStar = ""

		for(let i = 0; i < star; i++){
			cantStar +=  `<img  src="/icon-star.svg" style="margin-left: 5px"  name="green"/>`
		}


		return { __html: cantStar }

	}


	return(

		<div className={classes.cardStar}>
			<div className={classes.cardStarContainer} dangerouslySetInnerHTML={getStar(stars)}>
			</div>


			<div>
				{description}
			</div>
		</div>
	)
}

export default RatedStars