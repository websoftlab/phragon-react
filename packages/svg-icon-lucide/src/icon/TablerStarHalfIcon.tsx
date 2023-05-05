import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStarHalfIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStarHalfIcon = React.forwardRef<SVGSVGElement, TablerStarHalfIconProps>(function TablerStarHalfIcon(
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
			<path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStarHalfIcon.displayName = "TablerStarHalfIcon";
}
