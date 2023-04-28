import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVersionsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVersionsIcon = React.forwardRef<SVGSVGElement, TablerVersionsIconProps>(function TablerVersionsIcon(
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
			<path d="M10 5m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
			<path d="M7 7l0 10" />
			<path d="M4 8l0 8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVersionsIcon.displayName = "TablerVersionsIcon";
}
