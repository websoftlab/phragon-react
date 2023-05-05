import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignEndHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignEndHorizontalIcon = React.forwardRef<SVGSVGElement, TablerAlignEndHorizontalIconProps>(
	function TablerAlignEndHorizontalIcon(props, ref) {
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
				<path d="M6 2 H8 A2 2 0 0 1 10 4 V16 A2 2 0 0 1 8 18 H6 A2 2 0 0 1 4 16 V4 A2 2 0 0 1 6 2 z" />
				<path d="M16 9 H18 A2 2 0 0 1 20 11 V16 A2 2 0 0 1 18 18 H16 A2 2 0 0 1 14 16 V11 A2 2 0 0 1 16 9 z" />
				<path d="M22 22H2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignEndHorizontalIcon.displayName = "TablerAlignEndHorizontalIcon";
}
