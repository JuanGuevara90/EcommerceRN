import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
	<Svg
		width={48}
		height={48}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Rect
			x={5}
			y={17}
			width={38}
			height={24}
			rx={2}
			fill="#2F88FF"
			stroke="#000"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			fill="#2F88FF"
			stroke="#000"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M14 7h20v10H14z"
		/>
		<Path
			fill="#43CCF8"
			stroke="#fff"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M18 25h12v8H18z"
		/>
		<Path
			d="M30 29h13M5 29h13"
			stroke="#fff"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M5 24v10M43 24v10"
			stroke="#000"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default SvgComponent;
