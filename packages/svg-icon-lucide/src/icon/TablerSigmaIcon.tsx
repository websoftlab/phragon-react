import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSigmaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSigmaIcon = React.forwardRef<SVGSVGElement, TablerSigmaIconProps>(function TablerSigmaIcon(
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
			<path d="M18 7V4H6l6 8-6 8h12v-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSigmaIcon.displayName = "TablerSigmaIcon";
}
