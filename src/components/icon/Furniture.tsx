import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 490 490"
		style={{
			enableBackground: "new 0 0 490 490",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<Path
			style={{
				fill: "#704324",
			}}
			d="M240 440h35v40h-35zM415 440h35v40h-35z"
		/>
		<Path
			style={{
				fill: "#a26234",
			}}
			d="M465 350v90H225v-90zM225 265h240v85H225z"
		/>
		<Path
			style={{
				fill: "#704324",
			}}
			d="M480 230v35H205v-35h85z"
		/>
		<Path
			style={{
				fill: "#e7eced",
			}}
			d="M10 375h140v105H10z"
		/>
		<Path
			style={{
				fill: "#afb6bb",
			}}
			d="M10 10h140v365H10zM290 10v220h-85v35h20v175h15v40h-90V10z"
		/>
		<Path
			style={{
				fill: "#231f20",
			}}
			d="M480 220H300V10c0-5.522-4.477-10-10-10H10C4.477 0 0 4.478 0 10v470c0 5.522 4.477 10 10 10h265c5.523 0 10-4.478 10-10v-30h120v30c0 5.522 4.477 10 10 10h35c5.523 0 10-4.478 10-10v-30h5c5.523 0 10-4.478 10-10V275h5c5.523 0 10-4.478 10-10v-35c0-5.522-4.477-10-10-10zm-10 35H215v-15h255v15zm-15 85H235v-65h220v65zM140 20v345H20V20h120zM20 470v-85h120v85H20zM160 20h120v200h-75c-5.523 0-10 4.478-10 10v35c0 5.522 4.477 10 10 10h10v165c0 5.522 4.477 10 10 10h5v20h-70V20zm105 450h-15v-20h15v20zm175 0h-15v-20h15v20zm-205-40v-70h220v70H235z"
		/>
		<Path
			style={{
				fill: "#231f20",
			}}
			d="M330 295h30v20h-30zM330 380h30v20h-30zM180 160h20v40h-20zM100 160h20v40h-20zM65 415h30v20H65z"
		/>
	</Svg>
);

export default SvgComponent;
