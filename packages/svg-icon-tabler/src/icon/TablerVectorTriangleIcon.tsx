import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVectorTriangleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVectorTriangleIcon = React.forwardRef<SVGSVGElement, TablerVectorTriangleIconProps>(
	function TablerVectorTriangleIcon(props, ref) {
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
				<path d="M10 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M3 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M17 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M6.5 17.1l5 -9.1" />
				<path d="M17.5 17.1l-5 -9.1" />
				<path d="M7 19l10 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVectorTriangleIcon.displayName = "TablerVectorTriangleIcon";
}
