import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherDownloadCloudIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherDownloadCloudIcon = React.forwardRef<SVGSVGElement, FeatherDownloadCloudIconProps>(
	function FeatherDownloadCloudIcon(props, ref) {
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
				<polyline points="8 17 12 21 16 17" />
				<line x1="12" y1="12" x2="12" y2="21" />
				<path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherDownloadCloudIcon.displayName = "FeatherDownloadCloudIcon";
}
