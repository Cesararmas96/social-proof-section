import React from "react"; 
import Card from '../components/Card'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	cardConteniner: {
			display: "flex",
			flexDirection: "column",
			margin: "auto 10px",
			alignItems:"center",



		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
			height: "300px",
			width: "100%",

		},
	}
	

}));

const CardsContainer = () => {
  const classes = useStyles();

	return(
		<div className={classes.cardConteniner}>
		
			<Card 
				avatar="/image-colton.jpg"
				name="Colton Smith"
				buyer="Verified Buyer"
				mng= '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
			/>
			<Card 
				avatar="/image-irene.jpg"
				name="Irene Roberts"
				buyer="Verified Buyer"
				mng= '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
			/>

			<Card 
				avatar="/image-anne.jpg"
				name="Anne Wallace"
				buyer="Verified Buyer"
				mng= '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
			/>

			

		</div>
	)
}

export default CardsContainer