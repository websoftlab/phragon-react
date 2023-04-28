import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlphabetGreekIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlphabetGreekIcon = React.forwardRef<SVGSVGElement, TablerAlphabetGreekIconProps>(
	function TablerAlphabetGreekIcon(props, ref) {
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
				<path d="M10 10v7" />
				<path d="M5 10m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
				<path d="M14 20v-11a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlphabetGreekIcon.displayName = "TablerAlphabetGreekIcon";
}
