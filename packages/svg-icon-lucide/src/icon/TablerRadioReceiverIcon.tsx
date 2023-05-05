import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadioReceiverIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadioReceiverIcon = React.forwardRef<SVGSVGElement, TablerRadioReceiverIconProps>(
	function TablerRadioReceiverIcon(props, ref) {
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
				<path d="M5 16v2" />
				<path d="M19 16v2" />
				<path d="M4 8 H20 A2 2 0 0 1 22 10 V14 A2 2 0 0 1 20 16 H4 A2 2 0 0 1 2 14 V10 A2 2 0 0 1 4 8 z" />
				<path d="M18 12h0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRadioReceiverIcon.displayName = "TablerRadioReceiverIcon";
}
