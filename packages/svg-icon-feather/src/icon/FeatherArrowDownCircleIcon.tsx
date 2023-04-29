import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowDownCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowDownCircleIcon = React.forwardRef<SVGSVGElement, FeatherArrowDownCircleIconProps>(
	function FeatherArrowDownCircleIcon(props, ref) {
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
				<polyline points="8 12 12 16 16 12" />
				<line x1="12" y1="8" x2="12" y2="16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherArrowDownCircleIcon.displayName = "FeatherArrowDownCircleIcon";
}
