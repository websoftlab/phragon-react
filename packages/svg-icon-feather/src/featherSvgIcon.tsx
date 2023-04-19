import type { IconFeatherType } from "./types";
import type { SvgIconMaker, SvgIconMakerOptions } from "@phragon-react/svg-icon";
import { addSvgIconMaker } from "@phragon-react/svg-icon";
import React from "react";

export const featherIconMaker: SvgIconMaker = function featherIconMaker(type: IconFeatherType) {
	return (
		<>
			{type.map((item, index) => (
				<item.n key={index} {...item.a} />
			))}
		</>
	);
};

export const featherIconMakerOptions: SvgIconMakerOptions = {
	color: "stroke",
	size: 24,
	props: {
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
	},
};

export function addFeatherSvgIconMaker() {
	addSvgIconMaker<IconFeatherType>("feather", featherIconMaker, featherIconMakerOptions);
}
