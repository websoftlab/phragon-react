import type { IconLucideType } from "./types";
import type { SvgIconMaker, SvgIconMakerOptions } from "@phragon-react/svg-icon";
import { addSvgIconMaker } from "@phragon-react/svg-icon";
import React from "react";

export const lucideIconMaker: SvgIconMaker<IconLucideType> = function lucideIconMaker(type: IconLucideType) {
	if (type.length === 1) {
		return <path d={type[0]} />;
	}
	return (
		<>
			{type.map((d, index) => (
				<path key={index} d={d} />
			))}
		</>
	);
};

export const lucideIconMakerOptions: SvgIconMakerOptions = {
	color: "stroke",
	size: 24,
	props: {
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
	},
};

export function addLucideSvgIconMaker() {
	addSvgIconMaker<IconLucideType>("lucide", lucideIconMaker, lucideIconMakerOptions);
}
