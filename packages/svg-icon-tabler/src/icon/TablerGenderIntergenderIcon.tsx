import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderIntergenderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderIntergenderIcon = React.forwardRef<SVGSVGElement, TablerGenderIntergenderIconProps>(
	function TablerGenderIntergenderIcon(props, ref) {
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
				<path d="M13.5 11.5l6.5 6.5v-4" />
				<path d="M11.5 13.5l6.5 6.5" />
				<path d="M9 4a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
				<path d="M14 20l2 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderIntergenderIcon.displayName = "TablerGenderIntergenderIcon";
}
