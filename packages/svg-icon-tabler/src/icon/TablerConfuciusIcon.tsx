import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerConfuciusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerConfuciusIcon = React.forwardRef<SVGSVGElement, TablerConfuciusIconProps>(
	function TablerConfuciusIcon(props, ref) {
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
				<path d="M9 19l3 2v-18" />
				<path d="M4 10l8 -2" />
				<path d="M4 18l8 -10" />
				<path d="M20 18l-8 -8l8 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerConfuciusIcon.displayName = "TablerConfuciusIcon";
}
