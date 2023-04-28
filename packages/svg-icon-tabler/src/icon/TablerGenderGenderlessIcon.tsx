import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderGenderlessIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderGenderlessIcon = React.forwardRef<SVGSVGElement, TablerGenderGenderlessIconProps>(
	function TablerGenderGenderlessIcon(props, ref) {
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
				<path d="M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
				<path d="M12 10v-7" />
				<path d="M7 15h10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderGenderlessIcon.displayName = "TablerGenderGenderlessIcon";
}
