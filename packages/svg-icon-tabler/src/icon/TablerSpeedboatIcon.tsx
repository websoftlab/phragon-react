import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSpeedboatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSpeedboatIcon = React.forwardRef<SVGSVGElement, TablerSpeedboatIconProps>(
	function TablerSpeedboatIcon(props, ref) {
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
				<path d="M3 17h13.4a3 3 0 0 0 2.5 -1.34l3.1 -4.66h0h-6.23a4 4 0 0 0 -1.49 .29l-3.56 1.42a4 4 0 0 1 -1.49 .29h-3.73h0h-1l-1.5 4z" />
				<path d="M6 13l1.5 -5" />
				<path d="M6 8h8l2 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSpeedboatIcon.displayName = "TablerSpeedboatIcon";
}
