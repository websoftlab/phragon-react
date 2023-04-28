import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMasksTheaterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMasksTheaterIcon = React.forwardRef<SVGSVGElement, TablerMasksTheaterIconProps>(
	function TablerMasksTheaterIcon(props, ref) {
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
				<path d="M13.192 9h6.616a2 2 0 0 1 1.992 2.183l-.567 6.182a4 4 0 0 1 -3.983 3.635h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 1.992 -2.183z" />
				<path d="M15 13h.01" />
				<path d="M18 13h.01" />
				<path d="M15 16.5c1 .667 2 .667 3 0" />
				<path d="M8.632 15.982a4.037 4.037 0 0 1 -.382 .018h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 1.992 -2.183h6.616a2 2 0 0 1 2 2" />
				<path d="M6 8h.01" />
				<path d="M9 8h.01" />
				<path d="M6 12c.764 -.51 1.528 -.63 2.291 -.36" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMasksTheaterIcon.displayName = "TablerMasksTheaterIcon";
}
