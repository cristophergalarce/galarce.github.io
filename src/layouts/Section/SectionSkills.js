import React, { Component } from "react";
import FeatureBox from "../../components/Feature/FeatureBox";
import CtaMain from "../../components/Cta/CtaMain";
import { ReactComponent as IconLineMagic } from "../../assets/Icon/Line/magic.svg";
import { ReactComponent as IconSolidBolt } from "../../assets/Icon/Solid/bolt.svg";
import { ReactComponent as IconLineCode } from "../../assets/Icon/Line/code.svg";
import { ReactComponent as IconLineSearch } from "../../assets/Icon/Line/search.svg";
import { ReactComponent as IconLineUserPin } from "../../assets/Icon/Line/user-pin.svg";
import { ReactComponent as IconLineTarget } from "../../assets/Icon/Line/target.svg";

class SectionSkills extends Component {
	render() {
		return (
			<section id='Discover' className='Section-Container'>
				<div className='Wrapper-Texts-Section'>
					<h2 className='Title-Section'>
						<span className='Text-Gradient'>{this.props.h2FirstLine}</span>
						<br />
						{this.props.h2SecondLine}
					</h2>
					<p className='Description-Section'>{this.props.description}</p>
				</div>
				<div className='Wrapper-Features'>
					<FeatureBox
						icon={<IconLineMagic />}
						title='Subtle Visual Design'
						description='Clever solutions for interface design'
					/>
					<FeatureBox
						icon={<IconSolidBolt />}
						title='Rapid Prototyping'
						description='Validate ideas and concepts really fast'
					/>
					<FeatureBox
						icon={<IconLineCode />}
						title='Friendly Handoff'
						description='Ordered specs and assets for developers'
					/>
					<FeatureBox
						icon={<IconLineSearch />}
						title='End User-Centered'
						description='Co-create value and business with users'
					/>
					<FeatureBox
						icon={<IconLineUserPin />}
						title='Research-Driven'
						description='Continuous usability testing and research'
					/>
					<FeatureBox
						icon={<IconLineTarget />}
						title='Business oriented'
						description='Focus on improving the right goals'
					/>
				</div>
				<CtaMain label='Know more about ultra powers' />
			</section>
		);
	}
}

export default SectionSkills;
