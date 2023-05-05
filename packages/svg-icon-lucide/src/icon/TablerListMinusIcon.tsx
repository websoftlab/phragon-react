import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListMinusIcon = React.forwardRef<SVGSVGElement, TablerListMinusIconProps>(
	function TablerListMinusIcon(props, ref) {
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
				<path d="M11 12H3" />
				<path d="M16 6H3" />
				<path d="M16 18H3" />
				<path d="M21 12h-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerListMinusIcon.displayName = "TablerListMinusIcon";
}
