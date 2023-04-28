import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLineDashedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLineDashedIcon = React.forwardRef<SVGSVGElement, TablerLineDashedIconProps>(
	function TablerLineDashedIcon(props, ref) {
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
				<path d="M5 12h2" />
				<path d="M17 12h2" />
				<path d="M11 12h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLineDashedIcon.displayName = "TablerLineDashedIcon";
}
