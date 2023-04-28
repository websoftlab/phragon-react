import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCodeIcon = React.forwardRef<SVGSVGElement, TablerCodeIconProps>(function TablerCodeIcon(props, ref) {
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
			<path d="M7 8l-4 4l4 4" />
			<path d="M17 8l4 4l-4 4" />
			<path d="M14 4l-4 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCodeIcon.displayName = "TablerCodeIcon";
}
