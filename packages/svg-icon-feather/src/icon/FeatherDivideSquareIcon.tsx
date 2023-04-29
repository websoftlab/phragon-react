import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherDivideSquareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherDivideSquareIcon = React.forwardRef<SVGSVGElement, FeatherDivideSquareIconProps>(
	function FeatherDivideSquareIcon(props, ref) {
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
				<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
				<line x1="8" y1="12" x2="16" y2="12" />
				<line x1="12" y1="16" x2="12" y2="16" />
				<line x1="12" y1="8" x2="12" y2="8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherDivideSquareIcon.displayName = "FeatherDivideSquareIcon";
}
