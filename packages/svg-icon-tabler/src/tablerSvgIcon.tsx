import type { IconTablerType } from "./types";
import type { SvgIconMaker, SvgIconMakerOptions } from "@phragon-react/svg-icon";
import { addSvgIconMaker } from "@phragon-react/svg-icon";
import React from "react";

export const tablerIconMaker: SvgIconMaker<IconTablerType> = function tablerIconMaker(type: IconTablerType) {
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

export const tablerIconMakerOptions: SvgIconMakerOptions = {
	color: "stroke",
	size: 24,
	props: {
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
	},
};

export const tablerIconFilledMakerOptions: SvgIconMakerOptions = {
	color: "fill",
	size: 24,
	props: {
		strokeWidth: 0,
		strokeLinecap: "round",
		strokeLinejoin: "round",
	},
};

export function addTablerSvgIconMaker() {
	addSvgIconMaker<IconTablerType>("tabler", tablerIconMaker, tablerIconMakerOptions);
	addSvgIconMaker<IconTablerType>("tabler-filled", tablerIconMaker, tablerIconFilledMakerOptions);
}
