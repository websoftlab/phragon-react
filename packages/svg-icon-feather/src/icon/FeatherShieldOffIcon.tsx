import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherShieldOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherShieldOffIcon = React.forwardRef<SVGSVGElement, FeatherShieldOffIconProps>(
	function FeatherShieldOffIcon(props, ref) {
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
				<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />
				<path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
				<line x1="1" y1="1" x2="23" y2="23" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherShieldOffIcon.displayName = "FeatherShieldOffIcon";
}
