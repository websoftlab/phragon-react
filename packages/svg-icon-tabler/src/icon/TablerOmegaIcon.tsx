import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOmegaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOmegaIcon = React.forwardRef<SVGSVGElement, TablerOmegaIconProps>(function TablerOmegaIcon(
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
			<path d="M4 19h5v-1a7.35 7.35 0 1 1 6 0v1h5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerOmegaIcon.displayName = "TablerOmegaIcon";
}
