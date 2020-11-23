import React from 'react'
import {
  makeStyles
} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  card: {
  	backgroundColor: theme.palette.Primary.veryDarkMagenta,
    borderRadius: "10px",
    padding: "30px 28px",
    margin: "10px",
    fontSize: "14px",
    width: "100%",
    height: "max-content",
   //  position: "relative",


    [theme.breakpoints.up("sm")]: {
      maxWidth:"370px",
      maxHeight: "310px",

      "&:nth-child(1)":{
        alignSelf: "flex-start"

      },

      "&:nth-child(2)":{
        alignSelf: "center"
      },

       "&:nth-child(3)":{
        alignSelf: "flex-end"
        // top: "35px"

      }

    },
  },

  cardInfo: {
  	display: "flex",
  	alignItems: "center",
  	marginBottom: "25px"
  },

  cardInfoName:{
  	color: theme.palette.Neutral.lightGrayishMagenta,
    fontWeight: "500"

    
  },


  cardInfoBuyer:{
  	color: theme.palette.Primary.pink,
    fontWeight: "400"

  },

  cardInfoAvatar:{
  	borderRadius: "100%",
  	width: "40px",
  	marginRight: "25px"
  },


  cardMng: {
  	color: theme.palette.Neutral.lightGrayishMagenta,
  	lineHeight: "1.6"
  },

}));


const Card = ({name, buyer, mng, avatar}) => {

  const classes = useStyles();

	return(

		<div className={classes.card}>
			<div className={classes.cardInfo}>
				 <img
          className={classes.cardInfoAvatar}
          src={avatar}
          alt={`${avatar}  ${name}`}
       		/>

       	<div>
					<div className={classes.cardInfoName}>
						{name}
					</div>
					<div className={classes.cardInfoBuyer}>
						{buyer}
					</div>
				</div>
			</div>

			<div className={classes.cardMng}>
				{mng}
			</div>
		</div>
	)
}

export default Card