import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderAndrogyneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderAndrogyneIcon = React.forwardRef<SVGSVGElement, TablerGenderAndrogyneIconProps>(
	function TablerGenderAndrogyneIcon(props, ref) {
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
				<path d="M13 11l6 -6" />
				<path d="M9 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M19 9v-4h-4" />
				<path d="M16.5 10.5l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderAndrogyneIcon.displayName = "TablerGenderAndrogyneIcon";
}
