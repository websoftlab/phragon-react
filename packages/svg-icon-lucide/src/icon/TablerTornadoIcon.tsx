import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTornadoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTornadoIcon = React.forwardRef<SVGSVGElement, TablerTornadoIconProps>(function TablerTornadoIcon(
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
			<path d="M21 4H3" />
			<path d="M18 8H6" />
			<path d="M19 12H9" />
			<path d="M16 16h-6" />
			<path d="M11 20H9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTornadoIcon.displayName = "TablerTornadoIcon";
}
