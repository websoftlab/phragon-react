import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudHailIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudHailIcon = React.forwardRef<SVGSVGElement, TablerCloudHailIconProps>(
	function TablerCloudHailIcon(props, ref) {
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
				<path d="M16 14v2" />
				<path d="M8 14v2" />
				<path d="M16 20h.01" />
				<path d="M8 20h.01" />
				<path d="M12 16v2" />
				<path d="M12 22h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCloudHailIcon.displayName = "TablerCloudHailIcon";
}
