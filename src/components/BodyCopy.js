import React from 'react'
import {
  makeStyles
} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	BodyCopyContainer:{
		width:"100%",
		padding: "13px",
		textAlign : "center",
		margin: "auto 10px",


   		[theme.breakpoints.up("sm")]: {
			width: "50%",
		},
	},

	title: {
		fontWeight: "700",
  		color: theme.palette.Primary.veryDarkMagenta,
  		fontSize: "35px",
   		lineHeight: .9,
   		marginBottom: "30px",

   		[theme.breakpoints.up("sm")]: {
			textAlign : "left",
			maxWidth: "300px"
			
			
		},

	},

	content: {
  		color: theme.palette.Neutral.darkGrayishMagenta,
   		lineHeight: 1.6,
   		marginBottom: "40px",
   		
   		[theme.breakpoints.up("sm")]: {
   			width: "100%",
			textAlign : "left",
			maxWidth: "456px"
			
		},

	}
}));


const BodyCopy = () => {
  
  	const classes = useStyles();

	return(
		<div className={classes.BodyCopyContainer}>
			<div className={classes.title}>
    			10,000+ of our users love our products.
			</div>

			<div className={classes.content}>
			  We only provide great products combined with excellent customer service.
   			 See what our satisfied customers are saying about our services.
    
			</div>
		</div>
	)
}

export default BodyCopy