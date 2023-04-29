import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCloudSnowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCloudSnowIcon = React.forwardRef<SVGSVGElement, FeatherCloudSnowIconProps>(
	function FeatherCloudSnowIcon(props, ref) {
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
				<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
				<line x1="8" y1="16" x2="8.01" y2="16" />
				<line x1="8" y1="20" x2="8.01" y2="20" />
				<line x1="12" y1="18" x2="12.01" y2="18" />
				<line x1="12" y1="22" x2="12.01" y2="22" />
				<line x1="16" y1="16" x2="16.01" y2="16" />
				<line x1="16" y1="20" x2="16.01" y2="20" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCloudSnowIcon.displayName = "FeatherCloudSnowIcon";
}
