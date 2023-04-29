import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherScissorsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherScissorsIcon = React.forwardRef<SVGSVGElement, FeatherScissorsIconProps>(
	function FeatherScissorsIcon(props, ref) {
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
				<circle cx="6" cy="6" r="3" />
				<circle cx="6" cy="18" r="3" />
				<line x1="20" y1="4" x2="8.12" y2="15.88" />
				<line x1="14.47" y1="14.48" x2="20" y2="20" />
				<line x1="8.12" y1="8.12" x2="12" y2="12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherScissorsIcon.displayName = "FeatherScissorsIcon";
}
