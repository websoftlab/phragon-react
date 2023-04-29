import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherHelpCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherHelpCircleIcon = React.forwardRef<SVGSVGElement, FeatherHelpCircleIconProps>(
	function FeatherHelpCircleIcon(props, ref) {
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
				<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
				<line x1="12" y1="17" x2="12.01" y2="17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherHelpCircleIcon.displayName = "FeatherHelpCircleIcon";
}
