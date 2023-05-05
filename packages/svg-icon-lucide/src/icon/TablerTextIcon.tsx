import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextIcon = React.forwardRef<SVGSVGElement, TablerTextIconProps>(function TablerTextIcon(props, ref) {
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
			<path d="M17 6.1H3" />
			<path d="M21 12.1H3" />
			<path d="M15.1 18H3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTextIcon.displayName = "TablerTextIcon";
}
