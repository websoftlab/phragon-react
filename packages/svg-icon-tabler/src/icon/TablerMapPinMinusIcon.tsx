import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapPinMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapPinMinusIcon = React.forwardRef<SVGSVGElement, TablerMapPinMinusIconProps>(
	function TablerMapPinMinusIcon(props, ref) {
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
				<path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
				<path d="M12.758 21.337a2 2 0 0 1 -2.171 -.437l-4.244 -4.243a8 8 0 1 1 12.585 -1.652" />
				<path d="M16 19h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMapPinMinusIcon.displayName = "TablerMapPinMinusIcon";
}
