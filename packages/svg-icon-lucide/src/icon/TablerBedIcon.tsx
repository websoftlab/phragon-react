import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBedIcon = React.forwardRef<SVGSVGElement, TablerBedIconProps>(function TablerBedIcon(props, ref) {
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
			<path d="M2 4v16" />
			<path d="M2 8h18a2 2 0 0 1 2 2v10" />
			<path d="M2 17h20" />
			<path d="M6 8v9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBedIcon.displayName = "TablerBedIcon";
}
