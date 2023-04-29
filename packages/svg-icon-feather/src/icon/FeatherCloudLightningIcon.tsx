import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCloudLightningIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCloudLightningIcon = React.forwardRef<SVGSVGElement, FeatherCloudLightningIconProps>(
	function FeatherCloudLightningIcon(props, ref) {
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
				<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
				<polyline points="13 11 9 17 15 17 11 23" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCloudLightningIcon.displayName = "FeatherCloudLightningIcon";
}
