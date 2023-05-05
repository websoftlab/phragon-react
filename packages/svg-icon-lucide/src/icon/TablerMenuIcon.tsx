import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMenuIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMenuIcon = React.forwardRef<SVGSVGElement, TablerMenuIconProps>(function TablerMenuIcon(props, ref) {
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
			<path d="M4 12 L20 12" />
			<path d="M4 6 L20 6" />
			<path d="M4 18 L20 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMenuIcon.displayName = "TablerMenuIcon";
}
