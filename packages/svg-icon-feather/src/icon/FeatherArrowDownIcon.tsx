import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowDownIcon = React.forwardRef<SVGSVGElement, FeatherArrowDownIconProps>(
	function FeatherArrowDownIcon(props, ref) {
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
				<line x1="12" y1="5" x2="12" y2="19" />
				<polyline points="19 12 12 19 5 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherArrowDownIcon.displayName = "FeatherArrowDownIcon";
}
