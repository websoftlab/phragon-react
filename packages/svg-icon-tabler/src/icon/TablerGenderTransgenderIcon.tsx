import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderTransgenderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderTransgenderIcon = React.forwardRef<SVGSVGElement, TablerGenderTransgenderIconProps>(
	function TablerGenderTransgenderIcon(props, ref) {
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
				<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M15 9l6 -6" />
				<path d="M21 7v-4h-4" />
				<path d="M9 9l-6 -6" />
				<path d="M3 7v-4h4" />
				<path d="M5.5 8.5l3 -3" />
				<path d="M12 16v5" />
				<path d="M9.5 19h5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderTransgenderIcon.displayName = "TablerGenderTransgenderIcon";
}
