import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignalEIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignalEIcon = React.forwardRef<SVGSVGElement, TablerSignalEIconProps>(function TablerSignalEIcon(
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
			<path d="M14 8h-4v8h4" />
			<path d="M10 12h2.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSignalEIcon.displayName = "TablerSignalEIcon";
}
