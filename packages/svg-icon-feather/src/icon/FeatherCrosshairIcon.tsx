import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCrosshairIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCrosshairIcon = React.forwardRef<SVGSVGElement, FeatherCrosshairIconProps>(
	function FeatherCrosshairIcon(props, ref) {
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
				<circle cx="12" cy="12" r="10" />
				<line x1="22" y1="12" x2="18" y2="12" />
				<line x1="6" y1="12" x2="2" y2="12" />
				<line x1="12" y1="6" x2="12" y2="2" />
				<line x1="12" y1="22" x2="12" y2="18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCrosshairIcon.displayName = "FeatherCrosshairIcon";
}
