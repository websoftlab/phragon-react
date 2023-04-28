import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShadowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShadowIcon = React.forwardRef<SVGSVGElement, TablerShadowIconProps>(function TablerShadowIcon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M13 12h5" />
			<path d="M13 15h4" />
			<path d="M13 18h1" />
			<path d="M13 9h4" />
			<path d="M13 6h1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShadowIcon.displayName = "TablerShadowIcon";
}
