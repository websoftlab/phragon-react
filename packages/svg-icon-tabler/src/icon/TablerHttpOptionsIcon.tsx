import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHttpOptionsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHttpOptionsIcon = React.forwardRef<SVGSVGElement, TablerHttpOptionsIconProps>(
	function TablerHttpOptionsIcon(props, ref) {
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
				<path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
				<path d="M10 12h2a2 2 0 1 0 0 -4h-2v8" />
				<path d="M17 8h4" />
				<path d="M19 8v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHttpOptionsIcon.displayName = "TablerHttpOptionsIcon";
}
