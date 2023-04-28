import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudDownloadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudDownloadIcon = React.forwardRef<SVGSVGElement, TablerCloudDownloadIconProps>(
	function TablerCloudDownloadIcon(props, ref) {
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
				<path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
				<path d="M12 13l0 9" />
				<path d="M9 19l3 3l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCloudDownloadIcon.displayName = "TablerCloudDownloadIcon";
}
