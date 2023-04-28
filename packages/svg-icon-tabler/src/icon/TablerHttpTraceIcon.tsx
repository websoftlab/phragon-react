import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHttpTraceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHttpTraceIcon = React.forwardRef<SVGSVGElement, TablerHttpTraceIconProps>(
	function TablerHttpTraceIcon(props, ref) {
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
				<path d="M3 8h4" />
				<path d="M5 8v8" />
				<path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
				<path d="M17 16v-6a2 2 0 1 1 4 0v6" />
				<path d="M17 13h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHttpTraceIcon.displayName = "TablerHttpTraceIcon";
}
