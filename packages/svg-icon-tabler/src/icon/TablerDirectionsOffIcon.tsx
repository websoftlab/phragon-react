import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDirectionsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDirectionsOffIcon = React.forwardRef<SVGSVGElement, TablerDirectionsOffIconProps>(
	function TablerDirectionsOffIcon(props, ref) {
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
				<path d="M12 21v-4" />
				<path d="M12 13v-1" />
				<path d="M12 5v-2" />
				<path d="M10 21h4" />
				<path d="M8 8v1h1m4 0h6l2 -2l-2 -2h-10" />
				<path d="M14 14v3h-8l-2 -2l2 -2h7" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDirectionsOffIcon.displayName = "TablerDirectionsOffIcon";
}
