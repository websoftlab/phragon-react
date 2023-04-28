import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLuggageOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLuggageOffIcon = React.forwardRef<SVGSVGElement, TablerLuggageOffIconProps>(
	function TablerLuggageOffIcon(props, ref) {
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
				<path d="M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-10c0 -.546 .218 -1.04 .573 -1.4" />
				<path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
				<path d="M6 10h4m4 0h4" />
				<path d="M6 16h10" />
				<path d="M9 20v1" />
				<path d="M15 20v1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLuggageOffIcon.displayName = "TablerLuggageOffIcon";
}
