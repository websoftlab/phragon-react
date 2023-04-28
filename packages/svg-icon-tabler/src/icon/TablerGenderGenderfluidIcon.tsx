import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderGenderfluidIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderGenderfluidIcon = React.forwardRef<SVGSVGElement, TablerGenderGenderfluidIconProps>(
	function TablerGenderGenderfluidIcon(props, ref) {
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
				<path d="M10 15.464a4 4 0 1 0 4 -6.928a4 4 0 0 0 -4 6.928z" />
				<path d="M15.464 14l3 -5.196" />
				<path d="M5.536 15.195l3 -5.196" />
				<path d="M12 12h.01" />
				<path d="M9 9l-6 -6" />
				<path d="M5.5 8.5l3 -3" />
				<path d="M21 21l-6 -6" />
				<path d="M17 20l3 -3" />
				<path d="M3 7v-4h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderGenderfluidIcon.displayName = "TablerGenderGenderfluidIcon";
}
