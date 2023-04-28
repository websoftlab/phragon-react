import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTxtIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTxtIcon = React.forwardRef<SVGSVGElement, TablerTxtIconProps>(function TablerTxtIcon(props, ref) {
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
			<path d="M3 8h4" />
			<path d="M5 8v8" />
			<path d="M17 8h4" />
			<path d="M19 8v8" />
			<path d="M10 8l4 8" />
			<path d="M10 16l4 -8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTxtIcon.displayName = "TablerTxtIcon";
}
