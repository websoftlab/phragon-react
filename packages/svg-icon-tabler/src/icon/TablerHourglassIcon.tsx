import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHourglassIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHourglassIcon = React.forwardRef<SVGSVGElement, TablerHourglassIconProps>(
	function TablerHourglassIcon(props, ref) {
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
				<path d="M6.5 7h11" />
				<path d="M6.5 17h11" />
				<path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
				<path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHourglassIcon.displayName = "TablerHourglassIcon";
}
