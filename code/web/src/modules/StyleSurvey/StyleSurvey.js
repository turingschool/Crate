import React, { Component } from 'react';

//UI Imports
import { H5, H6 } from '../../ui/typography';
import { grey, grey2 } from '../../ui/common/colors';
import { Helmet } from 'react-helmet';
import { textLevel1 } from '../../ui/common/shadows';
import { level1, glowShadow } from '../../ui/common/shadows';
import { messageShow, messageHide } from '../common/api/actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

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
							id: 'athletic-top',
							src:
								'https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg',
							style: 'athletic',
							selected: false,
						},
						{
							id: 'business-top',
							src:
								'https://www.kustomkit.com/colours/1200/KK710lightblue_front.jpg',
							style: 'business attire',
							selected: false,
						},
						{
							id: 'casual-top',
							src:
								'https://i.pinimg.com/originals/da/88/22/da8822839f9f281cf5b274df48c7b90f.jpg',
							style: 'casual everyday',
							selected: false,
						},
					],
				},
				{
					category: 'Bottoms',
					images: [
						{
							id: 'athletic-bottom',
							src:
								'http://www.iaeiu.com/wp-content/uploads/2018/05/crysp-jeans-pants-black-mens-crysp-fb-black-white-track-pants-black.jpg',
							style: 'athletic',
							selected: false,
						},
						{
							id: 'business-bottom',
							src:
								'https://content.backcountry.com/images/items/900/NKE/NKE012B/KH.jpg',
							style: 'business attire',
							selected: false,
						},
						{
							id: 'casual-bottom',
							src:
								'https://www.kingsize.com.au/user/images/3316_1000_1000.jpg?t=1801051602',
							style: 'casual everyday',
							selected: false,
						},
					],
				},
				{
					category: 'Shoes',
					images: [
						{
							id: 'athletic-shoes',
							src:
								'https://www.careyfashion.com/fashion/wp-content/uploads/2016/12/athletic-shoes-3.jpg',
							style: 'athletic',
							selected: false,
						},
						{
							id: 'business-shoes',
							src:
								'https://ae01.alicdn.com/kf/HTB1r5yEKVXXXXX5aXXXq6xXFXXX6/2016-New-Men-Dress-Formal-Oxfords-Leather-Shoes-Business-Casual-Shoes-Dress-Fashion-Luxury-Leather-Flat.jpg',
							style: 'business attire',
							selected: false,
						},
						{
							id: 'casual-shoes',
							src:
								'https://stevie-wonder.com/wp-content/uploads/2018/03/Mens-Comfort-Polar-Fleece-Slip-On-Slippers-Color-Block-Memory-Foam-House-Loafers-Shoes-by-UltraIdeas-e1520173456434.jpg',
							style: 'casual everyday',
							selected: false,
						},
					],
				},
				{
					category: 'Accessories',
					images: [
						{
							id: 'athletic-accessory',
							src:
								'https://image.sportsmansguide.com/adimgs/l/2/235435_ts.jpg',
							style: 'athletic',
							selected: false,
						},
						{
							id: 'business-accessory',
							src:
								'http://www.clker.com/cliparts/7/b/0/3/12828581742005620564watch.jpg',
							style: 'business attire',
							selected: false,
						},
						{
							id: 'casual-accessory',
							src:
								'https://i.pinimg.com/originals/f1/39/a2/f139a2591edc7dc7f66e4b5dff7a431a.png',
							style: 'casual everyday',
							selected: false,
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
					key={i}
					style={{
						display: 'flex',
						flexDirection: 'column',
						boxShadow: level1,
						margin: '1em',
						alignItems: 'center',
						maxWidth: '300px',
					}}>
					<ImageTile
						data-testid={`${image.id}-image`}
						key={i}
						data-category={image.style}
						width={100}
           				height={250}
						image={image.src}
						style={{ boxShadow: image.selected ? glowShadow : level1, backgroundSize: 'cover' }}
					/>
					<Button
						id={image.id}
						data-testid={`${image.id}-button`}
						style={{
							margin: '1.5em 1.5em 1.5em 2.5em',
							height: '37px',
							width: '200px',
							fontSize: '14px'
						}}
						theme='secondary'
						onClick={e => {
							this.collectAnswer(e);
						}}
					>
						{image.selected ? 'Unselect this style' : 'Select this style'}
					</Button>
				</GridCell>
			);
		});
	};

	collectAnswer = e => {
		const selectedId = e.target.id
		const selectedImage = this.state.survey[this.state.currentIndex].images.find(image => image.id === selectedId);
		selectedImage.selected = !selectedImage.selected;
		selectedImage.selected ? this.state.userAnswers[selectedImage.style]++ : this.state.userAnswers[selectedImage.style]--;
		this.setState({ ...this.state });
		// If a  user has no answers, they cannot complete the survey
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
		const userAnswerCount = Object.keys(this.state.userAnswers).reduce((totalCount, category) => {
			return this.state.userAnswers[category] + totalCount;
		}, 0)
		if (!userAnswerCount) {
			this.props.messageShow('You must select at least one answer before completing to survey');
			setTimeout(() => {
				this.props.messageHide();
			}, 5000);
		} else {
			console.log(this.state.userAnswers);
		}
	};

	render() {
		return (
			<>
				<Helmet>
					<title>Style Survey -Crates</title>
				</Helmet>

				<Grid   alignCenter={true} style={{ backgroundColor: grey }}>
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

export default withRouter(connect(null, {
  messageShow,
  messageHide
})(StyleSurvey));
