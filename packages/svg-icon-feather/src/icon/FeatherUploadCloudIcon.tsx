import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherUploadCloudIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherUploadCloudIcon = React.forwardRef<SVGSVGElement, FeatherUploadCloudIconProps>(
	function FeatherUploadCloudIcon(props, ref) {
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
				<polyline points="16 16 12 12 8 16" />
				<line x1="12" y1="12" x2="12" y2="21" />
				<path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
				<polyline points="16 16 12 12 8 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherUploadCloudIcon.displayName = "FeatherUploadCloudIcon";
}
