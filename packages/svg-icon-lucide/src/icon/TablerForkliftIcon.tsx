import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerForkliftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerForkliftIcon = React.forwardRef<SVGSVGElement, TablerForkliftIconProps>(function TablerForkliftIcon(
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
			<path d="M12 12H5a2 2 0 0 0-2 2v5" />
			<path d="M15 19 A2 2 0 0 1 13 21 A2 2 0 0 1 11 19 A2 2 0 0 1 15 19" />
			<path d="M7 19 A2 2 0 0 1 5 21 A2 2 0 0 1 3 19 A2 2 0 0 1 7 19" />
			<path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerForkliftIcon.displayName = "TablerForkliftIcon";
}
