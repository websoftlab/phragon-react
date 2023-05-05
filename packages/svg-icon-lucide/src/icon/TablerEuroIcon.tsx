import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEuroIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEuroIcon = React.forwardRef<SVGSVGElement, TablerEuroIconProps>(function TablerEuroIcon(props, ref) {
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
			<path d="M4 10h12" />
			<path d="M4 14h9" />
			<path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEuroIcon.displayName = "TablerEuroIcon";
}
