import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLightbulbIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLightbulbIcon = React.forwardRef<SVGSVGElement, TablerLightbulbIconProps>(
	function TablerLightbulbIcon(props, ref) {
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
				<path d="M9 18 L15 18" />
				<path d="M10 22 L14 22" />
				<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLightbulbIcon.displayName = "TablerLightbulbIcon";
}
