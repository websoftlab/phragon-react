import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScanFaceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScanFaceIcon = React.forwardRef<SVGSVGElement, TablerScanFaceIconProps>(function TablerScanFaceIcon(
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
			<path d="M3 7V5a2 2 0 0 1 2-2h2" />
			<path d="M17 3h2a2 2 0 0 1 2 2v2" />
			<path d="M21 17v2a2 2 0 0 1-2 2h-2" />
			<path d="M7 21H5a2 2 0 0 1-2-2v-2" />
			<path d="M8 14s1.5 2 4 2 4-2 4-2" />
			<path d="M9 9h.01" />
			<path d="M15 9h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScanFaceIcon.displayName = "TablerScanFaceIcon";
}
