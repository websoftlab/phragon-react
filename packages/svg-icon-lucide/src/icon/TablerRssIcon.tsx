import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRssIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRssIcon = React.forwardRef<SVGSVGElement, TablerRssIconProps>(function TablerRssIcon(props, ref) {
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
			<path d="M4 11a9 9 0 0 1 9 9" />
			<path d="M4 4a16 16 0 0 1 16 16" />
			<path d="M6 19 A1 1 0 0 1 5 20 A1 1 0 0 1 4 19 A1 1 0 0 1 6 19" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRssIcon.displayName = "TablerRssIcon";
}
