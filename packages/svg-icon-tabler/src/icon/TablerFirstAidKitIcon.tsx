import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFirstAidKitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFirstAidKitIcon = React.forwardRef<SVGSVGElement, TablerFirstAidKitIconProps>(
	function TablerFirstAidKitIcon(props, ref) {
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
				<path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
				<path d="M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
				<path d="M10 14h4" />
				<path d="M12 12v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFirstAidKitIcon.displayName = "TablerFirstAidKitIcon";
}
