import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLandmarkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLandmarkIcon = React.forwardRef<SVGSVGElement, TablerLandmarkIconProps>(function TablerLandmarkIcon(
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
			<path d="M3 22 L21 22" />
			<path d="M6 18 L6 11" />
			<path d="M10 18 L10 11" />
			<path d="M14 18 L14 11" />
			<path d="M18 18 L18 11" />
			<path d="M12 2 L20 7 L4 7Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLandmarkIcon.displayName = "TablerLandmarkIcon";
}
