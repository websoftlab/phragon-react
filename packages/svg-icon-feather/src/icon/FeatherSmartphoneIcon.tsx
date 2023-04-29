import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherSmartphoneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherSmartphoneIcon = React.forwardRef<SVGSVGElement, FeatherSmartphoneIconProps>(
	function FeatherSmartphoneIcon(props, ref) {
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
				<rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
				<line x1="12" y1="18" x2="12.01" y2="18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherSmartphoneIcon.displayName = "FeatherSmartphoneIcon";
}
