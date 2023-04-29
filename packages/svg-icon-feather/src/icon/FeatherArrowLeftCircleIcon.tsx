import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowLeftCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowLeftCircleIcon = React.forwardRef<SVGSVGElement, FeatherArrowLeftCircleIconProps>(
	function FeatherArrowLeftCircleIcon(props, ref) {
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
				<polyline points="12 8 8 12 12 16" />
				<line x1="16" y1="12" x2="8" y2="12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherArrowLeftCircleIcon.displayName = "FeatherArrowLeftCircleIcon";
}
