import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWashMachineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWashMachineIcon = React.forwardRef<SVGSVGElement, TablerWashMachineIconProps>(
	function TablerWashMachineIcon(props, ref) {
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
				<path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
				<path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M8 6h.01" />
				<path d="M11 6h.01" />
				<path d="M14 6h2" />
				<path d="M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWashMachineIcon.displayName = "TablerWashMachineIcon";
}
