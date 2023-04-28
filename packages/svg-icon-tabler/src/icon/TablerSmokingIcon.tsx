import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSmokingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSmokingIcon = React.forwardRef<SVGSVGElement, TablerSmokingIconProps>(function TablerSmokingIcon(
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
			<path d="M3 13m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
			<path d="M8 13l0 4" />
			<path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSmokingIcon.displayName = "TablerSmokingIcon";
}
