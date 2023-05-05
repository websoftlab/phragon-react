import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignCenterVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignCenterVerticalIcon = React.forwardRef<SVGSVGElement, TablerAlignCenterVerticalIconProps>(
	function TablerAlignCenterVerticalIcon(props, ref) {
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
				<path d="M12 2v20" />
				<path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" />
				<path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
				<path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" />
				<path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignCenterVerticalIcon.displayName = "TablerAlignCenterVerticalIcon";
}
