import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCornerDownLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCornerDownLeftIcon = React.forwardRef<SVGSVGElement, FeatherCornerDownLeftIconProps>(
	function FeatherCornerDownLeftIcon(props, ref) {
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
				<polyline points="9 10 4 15 9 20" />
				<path d="M20 4v7a4 4 0 0 1-4 4H4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCornerDownLeftIcon.displayName = "FeatherCornerDownLeftIcon";
}
