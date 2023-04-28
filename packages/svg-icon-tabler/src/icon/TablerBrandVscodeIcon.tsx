import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandVscodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandVscodeIcon = React.forwardRef<SVGSVGElement, TablerBrandVscodeIconProps>(
	function TablerBrandVscodeIcon(props, ref) {
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
				<path d="M16 3v18l4 -2.5v-13z" />
				<path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" />
				<path d="M16 16.5l-11 -10l-2 1l13 13.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandVscodeIcon.displayName = "TablerBrandVscodeIcon";
}
