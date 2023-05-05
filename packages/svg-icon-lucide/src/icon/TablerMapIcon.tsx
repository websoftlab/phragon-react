import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapIcon = React.forwardRef<SVGSVGElement, TablerMapIconProps>(function TablerMapIcon(props, ref) {
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
			<path d="M3 6 L9 3 L15 6 L21 3 L21 18 L15 21 L9 18 L3 21Z" />
			<path d="M9 3 L9 18" />
			<path d="M15 6 L15 21" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMapIcon.displayName = "TablerMapIcon";
}
