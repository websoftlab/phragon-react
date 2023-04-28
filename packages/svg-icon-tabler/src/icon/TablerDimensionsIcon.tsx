import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDimensionsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDimensionsIcon = React.forwardRef<SVGSVGElement, TablerDimensionsIconProps>(
	function TablerDimensionsIcon(props, ref) {
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
				<path d="M3 5h11" />
				<path d="M12 7l2 -2l-2 -2" />
				<path d="M5 3l-2 2l2 2" />
				<path d="M19 10v11" />
				<path d="M17 19l2 2l2 -2" />
				<path d="M21 12l-2 -2l-2 2" />
				<path d="M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDimensionsIcon.displayName = "TablerDimensionsIcon";
}
