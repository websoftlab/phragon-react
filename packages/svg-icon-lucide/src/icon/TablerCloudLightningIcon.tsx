import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudLightningIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudLightningIcon = React.forwardRef<SVGSVGElement, TablerCloudLightningIconProps>(
	function TablerCloudLightningIcon(props, ref) {
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
				<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
				<path d="m13 12-3 5h4l-3 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCloudLightningIcon.displayName = "TablerCloudLightningIcon";
}
