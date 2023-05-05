import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailsIcon = React.forwardRef<SVGSVGElement, TablerMailsIconProps>(function TablerMailsIcon(
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
			<path d="M8 4 H20 A2 2 0 0 1 22 6 V15 A2 2 0 0 1 20 17 H8 A2 2 0 0 1 6 15 V6 A2 2 0 0 1 8 4 z" />
			<path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
			<path d="M2 8v11c0 1.1.9 2 2 2h14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMailsIcon.displayName = "TablerMailsIcon";
}
