import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignStartHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignStartHorizontalIcon = React.forwardRef<SVGSVGElement, TablerAlignStartHorizontalIconProps>(
	function TablerAlignStartHorizontalIcon(props, ref) {
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
				<path d="M6 6 H8 A2 2 0 0 1 10 8 V20 A2 2 0 0 1 8 22 H6 A2 2 0 0 1 4 20 V8 A2 2 0 0 1 6 6 z" />
				<path d="M16 6 H18 A2 2 0 0 1 20 8 V13 A2 2 0 0 1 18 15 H16 A2 2 0 0 1 14 13 V8 A2 2 0 0 1 16 6 z" />
				<path d="M22 2H2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignStartHorizontalIcon.displayName = "TablerAlignStartHorizontalIcon";
}
