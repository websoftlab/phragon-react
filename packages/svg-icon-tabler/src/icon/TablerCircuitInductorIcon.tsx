import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitInductorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitInductorIcon = React.forwardRef<SVGSVGElement, TablerCircuitInductorIconProps>(
	function TablerCircuitInductorIcon(props, ref) {
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
				<path d="M2 14h3v-2a2 2 0 1 1 4 0v2v-1.5a2.5 2.5 0 1 1 5 0v1.5v-1.5a2.5 2.5 0 1 1 5 0v1.5h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitInductorIcon.displayName = "TablerCircuitInductorIcon";
}
