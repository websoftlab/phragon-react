import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowRightCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowRightCircleIcon = React.forwardRef<SVGSVGElement, FeatherArrowRightCircleIconProps>(
	function FeatherArrowRightCircleIcon(props, ref) {
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
				<polyline points="12 16 16 12 12 8" />
				<line x1="8" y1="12" x2="16" y2="12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherArrowRightCircleIcon.displayName = "FeatherArrowRightCircleIcon";
}
