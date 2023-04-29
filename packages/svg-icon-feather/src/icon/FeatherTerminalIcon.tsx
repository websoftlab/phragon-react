import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherTerminalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherTerminalIcon = React.forwardRef<SVGSVGElement, FeatherTerminalIconProps>(
	function FeatherTerminalIcon(props, ref) {
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
				<polyline points="4 17 10 11 4 5" />
				<line x1="12" y1="19" x2="20" y2="19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherTerminalIcon.displayName = "FeatherTerminalIcon";
}
