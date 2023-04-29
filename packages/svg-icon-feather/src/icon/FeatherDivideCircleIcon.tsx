import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherDivideCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherDivideCircleIcon = React.forwardRef<SVGSVGElement, FeatherDivideCircleIconProps>(
	function FeatherDivideCircleIcon(props, ref) {
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
				<line x1="8" y1="12" x2="16" y2="12" />
				<line x1="12" y1="16" x2="12" y2="16" />
				<line x1="12" y1="8" x2="12" y2="8" />
				<circle cx="12" cy="12" r="10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherDivideCircleIcon.displayName = "FeatherDivideCircleIcon";
}
