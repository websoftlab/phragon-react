import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGripIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGripIcon = React.forwardRef<SVGSVGElement, TablerGripIconProps>(function TablerGripIcon(props, ref) {
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
			<path d="M13 5 A1 1 0 0 1 12 6 A1 1 0 0 1 11 5 A1 1 0 0 1 13 5" />
			<path d="M20 5 A1 1 0 0 1 19 6 A1 1 0 0 1 18 5 A1 1 0 0 1 20 5" />
			<path d="M6 5 A1 1 0 0 1 5 6 A1 1 0 0 1 4 5 A1 1 0 0 1 6 5" />
			<path d="M13 12 A1 1 0 0 1 12 13 A1 1 0 0 1 11 12 A1 1 0 0 1 13 12" />
			<path d="M20 12 A1 1 0 0 1 19 13 A1 1 0 0 1 18 12 A1 1 0 0 1 20 12" />
			<path d="M6 12 A1 1 0 0 1 5 13 A1 1 0 0 1 4 12 A1 1 0 0 1 6 12" />
			<path d="M13 19 A1 1 0 0 1 12 20 A1 1 0 0 1 11 19 A1 1 0 0 1 13 19" />
			<path d="M20 19 A1 1 0 0 1 19 20 A1 1 0 0 1 18 19 A1 1 0 0 1 20 19" />
			<path d="M6 19 A1 1 0 0 1 5 20 A1 1 0 0 1 4 19 A1 1 0 0 1 6 19" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGripIcon.displayName = "TablerGripIcon";
}
