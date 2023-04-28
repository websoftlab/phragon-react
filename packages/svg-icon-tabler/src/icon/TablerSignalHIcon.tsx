import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignalHIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignalHIcon = React.forwardRef<SVGSVGElement, TablerSignalHIconProps>(function TablerSignalHIcon(
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
			<path d="M10 16v-8" />
			<path d="M14 8v8" />
			<path d="M10 12h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSignalHIcon.displayName = "TablerSignalHIcon";
}
