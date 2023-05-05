import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGavelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGavelIcon = React.forwardRef<SVGSVGElement, TablerGavelIconProps>(function TablerGavelIcon(
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
			<path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
			<path d="m16 16 6-6" />
			<path d="m8 8 6-6" />
			<path d="m9 7 8 8" />
			<path d="m21 11-8-8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGavelIcon.displayName = "TablerGavelIcon";
}
