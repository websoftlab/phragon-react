import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrainIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrainIcon = React.forwardRef<SVGSVGElement, TablerTrainIconProps>(function TablerTrainIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8" />
			<path d="M3 15h16a2 2 0 0 0 2 -2" />
			<path d="M3 6v5h17.5" />
			<path d="M3 10l0 4" />
			<path d="M8 11l0 -5" />
			<path d="M13 11l0 -4.5" />
			<path d="M3 19l18 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrainIcon.displayName = "TablerTrainIcon";
}
