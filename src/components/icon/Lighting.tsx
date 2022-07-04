import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Lighting = (props) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		style={{
			enableBackground: "new 0 0 512 512",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<Path
			style={{
				fill: "#fcd577",
			}}
			d="M327.979 198.465h67.862L348.658 8.152H163.569l-47.183 190.313h155.523z"
		/>
		<Path
			style={{
				fill: "#cfdce5",
			}}
			d="M271.909 198.465v270.243h-31.591V198.465"
		/>
		<Path
			style={{
				fill: "#bac6cc",
			}}
			d="M271.909 198.465v31.687h-31.591v-31.687"
		/>
		<Path
			style={{
				fill: "#eac36e",
			}}
			d="M191.021 8.157 157.837 198.47h-41.451L163.569 8.157z"
		/>
		<Path
			style={{
				fill: "#cfdce5",
			}}
			d="M314.845 503.193H197.383v-8.953c0-14.1 11.431-25.531 25.531-25.531h66.399c14.1 0 25.531 11.431 25.531 25.531v8.953z"
		/>
		<Path d="M403.957 196.752 356.774 6.439A8.478 8.478 0 0 0 348.544 0H163.455a8.48 8.48 0 0 0-8.23 6.439l-47.181 190.313a8.48 8.48 0 0 0 8.23 10.52h115.451v253.283H222.8c-18.754 0-34.011 15.258-34.011 34.013v8.953a8.48 8.48 0 0 0 8.48 8.48h117.462a8.48 8.48 0 0 0 8.48-8.48v-8.953c0-18.754-15.257-34.013-34.011-34.013h-8.924V230.48a8.48 8.48 0 1 0-16.96 0v230.075h-14.631V207.273h70.7v106.306a8.48 8.48 0 1 0 16.96 0V207.273h59.382a8.485 8.485 0 0 0 6.679-3.254 8.485 8.485 0 0 0 1.551-7.267zM289.199 477.516c9.401 0 17.052 7.65 17.052 17.053v.473H205.748v-.473c0-9.403 7.65-17.053 17.052-17.053h66.399zm-56.357-287.203 3.278-57.487a8.482 8.482 0 0 0-7.985-8.949c-4.678-.27-8.682 3.307-8.949 7.984l-3.332 58.452h-48.043L198.038 16.96h27.699l-5.089 89.256a8.482 8.482 0 0 0 16.934.966l5.143-90.221h26.547l9.883 173.353h-46.313zM170.089 16.96h10.732l-30.227 173.353h-23.483L170.089 16.96zm191.315 173.353-16.873-96.764a8.481 8.481 0 0 0-16.709 2.914l16.364 93.849h-48.043L286.262 16.96h27.699l8.447 48.442a8.483 8.483 0 0 0 8.344 7.025 8.482 8.482 0 0 0 8.364-9.939l-7.94-45.528h10.733l42.978 173.353h-23.483z" />
	</Svg>
);

export default Lighting;
