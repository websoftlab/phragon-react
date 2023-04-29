import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCornerRightUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCornerRightUpIcon = React.forwardRef<SVGSVGElement, FeatherCornerRightUpIconProps>(
	function FeatherCornerRightUpIcon(props, ref) {
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
				<polyline points="10 9 15 4 20 9" />
				<path d="M4 20h7a4 4 0 0 0 4-4V4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCornerRightUpIcon.displayName = "FeatherCornerRightUpIcon";
}
