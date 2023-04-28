import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTypographyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTypographyIcon = React.forwardRef<SVGSVGElement, TablerTypographyIconProps>(
	function TablerTypographyIcon(props, ref) {
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
				<path d="M4 20l3 0" />
				<path d="M14 20l7 0" />
				<path d="M6.9 15l6.9 0" />
				<path d="M10.2 6.3l5.8 13.7" />
				<path d="M5 20l6 -16l2 0l7 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTypographyIcon.displayName = "TablerTypographyIcon";
}
