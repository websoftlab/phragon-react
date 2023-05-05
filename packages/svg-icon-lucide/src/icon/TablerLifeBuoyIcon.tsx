import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLifeBuoyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLifeBuoyIcon = React.forwardRef<SVGSVGElement, TablerLifeBuoyIconProps>(function TablerLifeBuoyIcon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M16 12 A4 4 0 0 1 12 16 A4 4 0 0 1 8 12 A4 4 0 0 1 16 12" />
			<path d="M4.93 4.93 L9.17 9.17" />
			<path d="M14.83 14.83 L19.07 19.07" />
			<path d="M14.83 9.17 L19.07 4.93" />
			<path d="M14.83 9.17 L18.36 5.64" />
			<path d="M4.93 19.07 L9.17 14.83" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLifeBuoyIcon.displayName = "TablerLifeBuoyIcon";
}
