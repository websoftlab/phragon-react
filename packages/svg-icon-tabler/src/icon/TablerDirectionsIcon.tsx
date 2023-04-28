import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDirectionsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDirectionsIcon = React.forwardRef<SVGSVGElement, TablerDirectionsIconProps>(
	function TablerDirectionsIcon(props, ref) {
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
				<path d="M12 13v-4" />
				<path d="M12 5v-2" />
				<path d="M10 21h4" />
				<path d="M8 5v4h11l2 -2l-2 -2z" />
				<path d="M14 13v4h-8l-2 -2l2 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDirectionsIcon.displayName = "TablerDirectionsIcon";
}
