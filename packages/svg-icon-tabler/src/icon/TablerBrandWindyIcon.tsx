import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandWindyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandWindyIcon = React.forwardRef<SVGSVGElement, TablerBrandWindyIconProps>(
	function TablerBrandWindyIcon(props, ref) {
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
				<path d="M9 4c0 5.5 -.33 16 4 16s7.546 -11.27 8 -13" />
				<path d="M3 4c.253 5.44 1.449 16 5.894 16c4.444 0 8.42 -10.036 9.106 -14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandWindyIcon.displayName = "TablerBrandWindyIcon";
}
