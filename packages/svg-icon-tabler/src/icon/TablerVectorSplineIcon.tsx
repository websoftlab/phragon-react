import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVectorSplineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVectorSplineIcon = React.forwardRef<SVGSVGElement, TablerVectorSplineIconProps>(
	function TablerVectorSplineIcon(props, ref) {
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
				<path d="M17 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M3 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
				<path d="M17 5c-6.627 0 -12 5.373 -12 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVectorSplineIcon.displayName = "TablerVectorSplineIcon";
}
