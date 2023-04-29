import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCornerRightDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCornerRightDownIcon = React.forwardRef<SVGSVGElement, FeatherCornerRightDownIconProps>(
	function FeatherCornerRightDownIcon(props, ref) {
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
				<polyline points="10 15 15 20 20 15" />
				<path d="M4 4h7a4 4 0 0 1 4 4v12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCornerRightDownIcon.displayName = "FeatherCornerRightDownIcon";
}
