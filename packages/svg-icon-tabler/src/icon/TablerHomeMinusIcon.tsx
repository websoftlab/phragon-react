import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeMinusIcon = React.forwardRef<SVGSVGElement, TablerHomeMinusIconProps>(
	function TablerHomeMinusIcon(props, ref) {
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
				<path d="M19 15v-3h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
				<path d="M16 19h6" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeMinusIcon.displayName = "TablerHomeMinusIcon";
}
