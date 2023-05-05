import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLightbulbOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLightbulbOffIcon = React.forwardRef<SVGSVGElement, TablerLightbulbOffIconProps>(
	function TablerLightbulbOffIcon(props, ref) {
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
				<path d="M9 18h6" />
				<path d="M10 22h4" />
				<path d="m2 2 20 20" />
				<path d="M9 2.804A6 6 0 0 1 18 8a4.65 4.65 0 0 1-1.03 3" />
				<path d="M8.91 14a4.61 4.61 0 0 0-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 0 1 .084-1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLightbulbOffIcon.displayName = "TablerLightbulbOffIcon";
}
