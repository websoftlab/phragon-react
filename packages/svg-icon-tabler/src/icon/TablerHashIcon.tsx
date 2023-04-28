import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHashIcon = React.forwardRef<SVGSVGElement, TablerHashIconProps>(function TablerHashIcon(props, ref) {
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
			<path d="M5 9l14 0" />
			<path d="M5 15l14 0" />
			<path d="M11 4l-4 16" />
			<path d="M17 4l-4 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHashIcon.displayName = "TablerHashIcon";
}
