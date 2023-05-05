import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeIcon = React.forwardRef<SVGSVGElement, TablerHomeIconProps>(function TablerHomeIcon(props, ref) {
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
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<path d="M9 22 L9 12 L15 12 L15 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHomeIcon.displayName = "TablerHomeIcon";
}
