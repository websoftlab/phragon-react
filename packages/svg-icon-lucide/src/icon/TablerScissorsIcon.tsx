import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScissorsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScissorsIcon = React.forwardRef<SVGSVGElement, TablerScissorsIconProps>(function TablerScissorsIcon(
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
			<path d="M9 6 A3 3 0 0 1 6 9 A3 3 0 0 1 3 6 A3 3 0 0 1 9 6" />
			<path d="M9 18 A3 3 0 0 1 6 21 A3 3 0 0 1 3 18 A3 3 0 0 1 9 18" />
			<path d="M20 4 L8.12 15.88" />
			<path d="M14.47 14.48 L20 20" />
			<path d="M8.12 8.12 L12 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScissorsIcon.displayName = "TablerScissorsIcon";
}
