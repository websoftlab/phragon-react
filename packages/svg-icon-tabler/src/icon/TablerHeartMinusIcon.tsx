import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeartMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeartMinusIcon = React.forwardRef<SVGSVGElement, TablerHeartMinusIconProps>(
	function TablerHeartMinusIcon(props, ref) {
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
				<path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8 6" />
				<path d="M14 16h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHeartMinusIcon.displayName = "TablerHeartMinusIcon";
}
