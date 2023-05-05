import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignEndVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignEndVerticalIcon = React.forwardRef<SVGSVGElement, TablerAlignEndVerticalIconProps>(
	function TablerAlignEndVerticalIcon(props, ref) {
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
				<path d="M4 4 H16 A2 2 0 0 1 18 6 V8 A2 2 0 0 1 16 10 H4 A2 2 0 0 1 2 8 V6 A2 2 0 0 1 4 4 z" />
				<path d="M11 14 H16 A2 2 0 0 1 18 16 V18 A2 2 0 0 1 16 20 H11 A2 2 0 0 1 9 18 V16 A2 2 0 0 1 11 14 z" />
				<path d="M22 22V2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignEndVerticalIcon.displayName = "TablerAlignEndVerticalIcon";
}
