import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStretchHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStretchHorizontalIcon = React.forwardRef<SVGSVGElement, TablerStretchHorizontalIconProps>(
	function TablerStretchHorizontalIcon(props, ref) {
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
				<path d="M4 4 H20 A2 2 0 0 1 22 6 V8 A2 2 0 0 1 20 10 H4 A2 2 0 0 1 2 8 V6 A2 2 0 0 1 4 4 z" />
				<path d="M4 14 H20 A2 2 0 0 1 22 16 V18 A2 2 0 0 1 20 20 H4 A2 2 0 0 1 2 18 V16 A2 2 0 0 1 4 14 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStretchHorizontalIcon.displayName = "TablerStretchHorizontalIcon";
}
