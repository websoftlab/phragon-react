import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignStartVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignStartVerticalIcon = React.forwardRef<SVGSVGElement, TablerAlignStartVerticalIconProps>(
	function TablerAlignStartVerticalIcon(props, ref) {
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
				<path d="M8 14 H13 A2 2 0 0 1 15 16 V18 A2 2 0 0 1 13 20 H8 A2 2 0 0 1 6 18 V16 A2 2 0 0 1 8 14 z" />
				<path d="M8 4 H20 A2 2 0 0 1 22 6 V8 A2 2 0 0 1 20 10 H8 A2 2 0 0 1 6 8 V6 A2 2 0 0 1 8 4 z" />
				<path d="M2 2v20" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignStartVerticalIcon.displayName = "TablerAlignStartVerticalIcon";
}
