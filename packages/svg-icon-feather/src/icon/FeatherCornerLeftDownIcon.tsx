import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCornerLeftDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCornerLeftDownIcon = React.forwardRef<SVGSVGElement, FeatherCornerLeftDownIconProps>(
	function FeatherCornerLeftDownIcon(props, ref) {
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
				<polyline points="14 15 9 20 4 15" />
				<path d="M20 4h-7a4 4 0 0 0-4 4v12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCornerLeftDownIcon.displayName = "FeatherCornerLeftDownIcon";
}
