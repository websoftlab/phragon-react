import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoveHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoveHorizontalIcon = React.forwardRef<SVGSVGElement, TablerMoveHorizontalIconProps>(
	function TablerMoveHorizontalIcon(props, ref) {
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
				<path d="M18 8 L22 12 L18 16" />
				<path d="M6 8 L2 12 L6 16" />
				<path d="M2 12 L22 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoveHorizontalIcon.displayName = "TablerMoveHorizontalIcon";
}
