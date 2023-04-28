import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerParachuteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerParachuteIcon = React.forwardRef<SVGSVGElement, TablerParachuteIconProps>(
	function TablerParachuteIcon(props, ref) {
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
				<path d="M22 12a10 10 0 1 0 -20 0" />
				<path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
				<path d="M2 12l10 10l-3.5 -10" />
				<path d="M15.5 12l-3.5 10l10 -10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerParachuteIcon.displayName = "TablerParachuteIcon";
}
