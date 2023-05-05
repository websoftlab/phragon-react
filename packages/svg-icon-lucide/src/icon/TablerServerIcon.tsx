import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerServerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerServerIcon = React.forwardRef<SVGSVGElement, TablerServerIconProps>(function TablerServerIcon(
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
			<path d="M4 2 H20 A2 2 0 0 1 22 4 V8 A2 2 0 0 1 20 10 H4 A2 2 0 0 1 2 8 V4 A2 2 0 0 1 4 2 z" />
			<path d="M4 14 H20 A2 2 0 0 1 22 16 V20 A2 2 0 0 1 20 22 H4 A2 2 0 0 1 2 20 V16 A2 2 0 0 1 4 14 z" />
			<path d="M6 6 L6.01 6" />
			<path d="M6 18 L6.01 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerServerIcon.displayName = "TablerServerIcon";
}
