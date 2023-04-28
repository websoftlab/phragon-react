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
			<path d="M21 4l-18 0" />
			<path d="M13 16l-6 0" />
			<path d="M11 20l4 0" />
			<path d="M6 8l14 0" />
			<path d="M4 12l12 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTornadoIcon.displayName = "TablerTornadoIcon";
}
