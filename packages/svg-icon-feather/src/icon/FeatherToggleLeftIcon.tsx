import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherToggleLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherToggleLeftIcon = React.forwardRef<SVGSVGElement, FeatherToggleLeftIconProps>(
	function FeatherToggleLeftIcon(props, ref) {
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
				<rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
				<circle cx="8" cy="12" r="3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherToggleLeftIcon.displayName = "FeatherToggleLeftIcon";
}
