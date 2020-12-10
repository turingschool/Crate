//This file could potentially be  better placed inside the user folder
// and let the user/api/action and user/api/state handle the functionality

// Double check with team, because  this coulsd also be a different page???

//need to import React from 'react'
//need to import Hooks if we decide to use them

//create a state tore property for
//isSurveyFineshed = false
//create a ract functionalcompoentn called StyleCurvey => <StyledSurvey>
//the sotre should be able to provide the app's state for
//error, isLoading and isSurveyFinshed
//declare the state of the form
//

/*
this.state = {

}
*/

/*
List of files need to be updated

A StyleSurve will be creates
-  setup/routes/user.js
  => to add the path to the styleSurvey
- web/src/modules/crate/iItem
  => add route to the <StyleSurvey/> if the form hasn't been filled out, "/style-preferences"
- web/src/modules/user/state
  => add property to keep track of status of form isSurveyCompleted = false
- web/src/modules/user/api/actions/js
  => within the user reducer add a case for UPDATE_SURVEY that whill save the users answers
  => add a new property to the user state called suerveyAnswers = {}
    =>  this property will be an object that will keep track of the user's information 
        - body shape
        - size
        - dislikes
        - Outfit and ocasion
        - places you shop
        - price

  => this property will track all the user answers

- web/src/modules/user/api/actions/js
most of the functions in this file can be reused to post the user's answers to the database

*/

/*
Reuse compoenent such as 
<Grid> for container
<GridCell> for cells
<Item> for elements within the GridCell
<Card> 
<H1> Header
<H3> Header
<H4> Header
<Button> well, fto click on something
<Tile> for images
<Modal> to render more information for the user if necessary
*/

import React, { Component } from 'react';

//UI Imports
import { H5, H6 } from '../../ui/typography';
import { grey, grey2 } from '../../ui/common/colors';
import { Helmet } from 'react-helmet';
import { white } from '../../ui/common/colors';
import { textLevel1 } from '../../ui/common/shadows';
import { level1 } from '../../ui/common/shadows';

//App Imports
import Grid from '../../ui/grid/Grid';
import { GridCell } from '../../ui/grid';
import ImageTile from '../../ui/image/Tile';
import Button from '../../ui/button';
class StyleSurvey extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentAnswer: null,
			userAnswers: {
				athletic: 0,
				'business attire': 0,
				'casual everyday': 0,
			},
			currentIndex: 0,
			survey: [
				{
					category: 'Tops',
					images: [
						{
							src:
								'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
							style: 'athletic',
						},
						{
							src:
								'https://www.kustomkit.com/colours/1200/KK710lightblue_front.jpg',
							style: 'business attire',
						},
						{
							src:
								'https://i.pinimg.com/originals/da/88/22/da8822839f9f281cf5b274df48c7b90f.jpg',
							style: 'casual everyday',
						},
					],
				},
				{
					category: 'Bottoms',
					images: [
						{
							src:
								'http://www.iaeiu.com/wp-content/uploads/2018/05/crysp-jeans-pants-black-mens-crysp-fb-black-white-track-pants-black.jpg',
							style: 'athletic',
						},
						{
							src:
								'https://content.backcountry.com/images/items/900/NKE/NKE012B/KH.jpg',
							style: 'business attire',
						},
						{
							src:
								'https://www.kingsize.com.au/user/images/3316_1000_1000.jpg?t=1801051602',
							style: 'casual everyday',
						},
					],
				},
				{
					category: 'Shoes',
					images: [
						{
							src:
								'https://www.careyfashion.com/fashion/wp-content/uploads/2016/12/athletic-shoes-3.jpg',
							style: 'athletic',
						},
						{
							src:
								'https://ae01.alicdn.com/kf/HTB1r5yEKVXXXXX5aXXXq6xXFXXX6/2016-New-Men-Dress-Formal-Oxfords-Leather-Shoes-Business-Casual-Shoes-Dress-Fashion-Luxury-Leather-Flat.jpg',
							style: 'business attire',
						},
						{
							src:
								'https://stevie-wonder.com/wp-content/uploads/2018/03/Mens-Comfort-Polar-Fleece-Slip-On-Slippers-Color-Block-Memory-Foam-House-Loafers-Shoes-by-UltraIdeas-e1520173456434.jpg',
							style: 'casual everyday',
						},
					],
				},
				{
					category: 'Accessories',
					images: [
						{
							src:
								'https://image.sportsmansguide.com/adimgs/l/2/235435_ts.jpg',
							style: 'athletic',
						},
						{
							src:
								'http://www.clker.com/cliparts/7/b/0/3/12828581742005620564watch.jpg',
							style: 'business attire',
						},
						{
							src:
								'https://i.pinimg.com/originals/f1/39/a2/f139a2591edc7dc7f66e4b5dff7a431a.png',
							style: 'casual everyday',
						},
					],
				},
			],
		};
	}

	displayImages = () => {
		const selectedSurvey = this.state.survey[this.state.currentIndex];
		return selectedSurvey.images.map((image, i) => {
			return (
				<GridCell
					justifyCenter
					style={{
						display: 'flex',
						flexDirection: 'column',
						boxShadow: level1,
						margin: '1em',
						alignItems: 'center',
						maxWidth: '300px',
					}}>
					<ImageTile
						onClick={e => {
							this.collectAnswer(e);
						}}
						key={i}
						data-category={image.style}
						id={i}
						width={'100%'}
            height={'250px'}
						image={image.src}
						style={{ boxShadow: level1, backgroundSize: 'cover' }}
					/>
					<Button
						style={{
							margin: '1.5em 1.5em 1.5em 2.5em',
							height: '37px',
							width: '200px',
						}}
						theme='secondary'>
						Select This Style
					</Button>
				</GridCell>
			);
		});
	};

	collectAnswer = e => {
		this.state.userAnswers[e.target.dataset.category]++;
	};

	navigateSurvey = direction => {
		let newIndex =
			direction === 'forward'
				? this.state.currentIndex + 1
				: this.state.currentIndex - 1;
		this.setState({
			currentIndex: newIndex,
		});
  };
  
  renderNavButtons = (direction) => {
    if (direction === 'back') {
      return this.state.currentIndex !== 0 ? 'visible' : 'hidden'
    } else {
      return this.state.currentIndex !== this.state.survey.length - 1 ? 'visible' : 'hidden'
    }
  }

	completeSurvey = () => {
		console.log(this.state.userAnswers);
	};

	render() {
		return (
			<>
				<Helmet>
					<title>Style Survey -Crates</title>
				</Helmet>

				<Grid alignCenter={true} style={{ backgroundColor: grey }}>
					<GridCell style={{ padding: '2em', textAlign: 'center' }}>
						<H5>Let's find out your perfect Style.</H5>
						<p style={{ marginTop: '1em', color: grey2 }}>
							Select the answers that better describe your personality{' '}
						</p>
					</GridCell>
				</Grid>

				<div style={{ margin: '2em' }}>
					<Grid justifyCenter={true} alignCenter={true}>
            
            <Button
              style={{ margin: '1.5em 1.5em 1.5em 2.5em', height: '37px', visibility: this.renderNavButtons('back') }}
              theme='secondary'
              onClick={() => this.navigateSurvey('back')}
              >
              Back
            </Button>
						<GridCell style={{ margin: '.3em', textAlign: 'center' }}>
							<H6
								font='primary'
								style={{
									textShadow: textLevel1,
									marginTop: '1em',
									fontSize: '2em',
								}}>
								{this.state.survey[this.state.currentIndex].category}
							</H6>
							<p style={{ margin: '1em' }}>Select your answer</p>
						</GridCell>

            <Button
              theme='secondary'
              style={{ margin: '1.5em 1.5em 1.5em 2.5em', height: '37px', visibility: this.renderNavButtons('next') }}
              onClick={() => this.navigateSurvey('forward')}>
              Next
            </Button>
					</Grid>

					<Grid alignCenter={true} style={{ display: 'flex' }} justifyCenter>
						{this.displayImages()}
					</Grid>

					{this.state.currentIndex === this.state.survey.length - 1 && (
						<Grid alignCenter={true}>
							<GridCell justifyCenter style={{ display: 'inline-flex' }}>
								<Button
									style={{ margin: '1.5em 1.5em 1.5em 2.5em', height: '37px' }}
									theme='secondary'
									onClick={() => this.completeSurvey()}>
									Submit
								</Button>
							</GridCell>
						</Grid>
					)}
				</div>
			</>
		);
	}
}

export default StyleSurvey;
