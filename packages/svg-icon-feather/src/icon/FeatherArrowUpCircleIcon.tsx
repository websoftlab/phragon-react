import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowUpCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowUpCircleIcon = React.forwardRef<SVGSVGElement, FeatherArrowUpCircleIconProps>(
	function FeatherArrowUpCircleIcon(props, ref) {
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
				<polyline points="16 12 12 8 8 12" />
				<line x1="12" y1="16" x2="12" y2="8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherArrowUpCircleIcon.displayName = "FeatherArrowUpCircleIcon";
}
