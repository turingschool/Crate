import React, { Component } from 'react';
import PropTypes from 'prop-types'

//UI Imports
import { H1, H5, H6 } from '../../ui/typography';
import { grey, grey2 } from '../../ui/common/colors';
import { Helmet } from 'react-helmet';
import { textLevel1 } from '../../ui/common/shadows';
import { level1, glowShadow } from '../../ui/common/shadows';
import { messageShow, messageHide } from '../common/api/actions'
import userRoutes from '../../setup/routes/user'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { assignUserStyle } from '../user/api/actions'

//App Imports
import Grid from '../../ui/grid/Grid';
import { GridCell } from '../../ui/grid';
import ImageTile from '../../ui/image/Tile';
import Button from '../../ui/button';
import surveyData from './StyleSurveyData'
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
			survey: surveyData
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
						width={300}
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
			this.props.assignUserStyle({
				id: this.props.user.details.id,
				survey: true,
				style: JSON.stringify(this.state.userAnswers)
			})
		}
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
								{!this.props.user.isSurveyCompleted ?
									<Button
										style={{ margin: '1.5em 1.5em 1.5em 2.5em', height: '37px' }}
										theme='secondary'
										onClick={() => this.completeSurvey()}>
										Submit
									</Button> :
									<Grid style={{ flexDirection: 'column' }} alignCenter justifyCenter>
										<H1
											font='primary'
											style={{
												textShadow: textLevel1,
												marginTop: '1em',
												fontSize: '2em',
												textAlign: 'center'
											}}>Your Style: {this.props.user.style}</H1>
										<Link to={userRoutes.subscriptions.path}>
										<Button
											theme='secondary'
											style={{ margin: '1.5em 1.5em 1.5em 2.5em', height: '37px' }}
										>
											See My Subscriptions
										</Button>
										</Link>
									</Grid>
								}
							</GridCell>
						</Grid>
					)}
				</div>
			</>
		);
	}
}

StyleSurvey.propTypes = {
	assignUserStyle: PropTypes.func.isRequired,
	messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired,
	user: PropTypes.object
}

function styleSurveyState(state) {
  return {
    user: state.user
  }
}

export default withRouter(connect(styleSurveyState, {
  messageShow,
	messageHide,
	assignUserStyle
})(StyleSurvey));
