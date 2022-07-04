import React from "react";
import { Heading, Text } from "native-base";
import { styles } from "./Title.style";

const Title = (props) => {
	const { title, ...rest } = props;
	return (
		<Heading>
			<Text color="emerald.500" {...rest}>
				{title}
			</Text>
		</Heading>
	);
};

export default Title;
