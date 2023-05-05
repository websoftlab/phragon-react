import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUploadCloudIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUploadCloudIcon = React.forwardRef<SVGSVGElement, TablerUploadCloudIconProps>(
	function TablerUploadCloudIcon(props, ref) {
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
				<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
				<path d="M12 12v9" />
				<path d="m16 16-4-4-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerUploadCloudIcon.displayName = "TablerUploadCloudIcon";
}
