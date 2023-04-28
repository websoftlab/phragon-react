import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitAmmeterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitAmmeterIcon = React.forwardRef<SVGSVGElement, TablerCircuitAmmeterIconProps>(
	function TablerCircuitAmmeterIcon(props, ref) {
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
				<path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M5 12h-3" />
				<path d="M19 12h3" />
				<path d="M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3" />
				<path d="M14 12h-4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitAmmeterIcon.displayName = "TablerCircuitAmmeterIcon";
}
