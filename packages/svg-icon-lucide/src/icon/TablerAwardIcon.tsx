import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAwardIcon = React.forwardRef<SVGSVGElement, TablerAwardIconProps>(function TablerAwardIcon(
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
			<path d="M18 8 A6 6 0 0 1 12 14 A6 6 0 0 1 6 8 A6 6 0 0 1 18 8" />
			<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAwardIcon.displayName = "TablerAwardIcon";
}
