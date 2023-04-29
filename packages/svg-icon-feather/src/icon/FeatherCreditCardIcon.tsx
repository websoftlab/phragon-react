import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCreditCardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCreditCardIcon = React.forwardRef<SVGSVGElement, FeatherCreditCardIconProps>(
	function FeatherCreditCardIcon(props, ref) {
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
				<rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
				<line x1="1" y1="10" x2="23" y2="10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCreditCardIcon.displayName = "FeatherCreditCardIcon";
}
