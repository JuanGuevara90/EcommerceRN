import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MenWatchs = (props) => (
	<Svg
		width={36}
		height={36}
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		className="iconify iconify--twemoji"
		{...props}
	>
		<Path
			fill="#31373D"
			d="M25 32a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v28z"
		/>
		<Path
			fill="#99AAB5"
			d="M32 18a2 2 0 0 0-2-2h-1a2 2 0 0 0 0 4h1a2 2 0 0 0 2-2z"
		/>
		<Path
			fill="#CCD6DD"
			d="M6 18c0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12s-5.372 12-12 12c-6.627 0-12-5.373-12-12z"
		/>
		<Path fill="#F5F8FA" d="M10 18a8 8 0 1 1 16 0 8 8 0 0 1-16 0z" />
		<Path
			fill="#66757F"
			d="M23 22a.994.994 0 0 1-.514-.143l-5-3A.998.998 0 0 1 17 18v-7a1 1 0 0 1 2 0v6.434l4.516 2.708A1 1 0 0 1 23 22z"
		/>
	</Svg>
);

export default MenWatchs;
