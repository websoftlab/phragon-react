import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScanIcon = React.forwardRef<SVGSVGElement, TablerScanIconProps>(function TablerScanIcon(props, ref) {
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
			<path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
			<path d="M4 17v1a2 2 0 0 0 2 2h2" />
			<path d="M16 4h2a2 2 0 0 1 2 2v1" />
			<path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
			<path d="M5 12l14 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScanIcon.displayName = "TablerScanIcon";
}
