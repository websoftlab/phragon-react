import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBusinessplanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBusinessplanIcon = React.forwardRef<SVGSVGElement, TablerBusinessplanIconProps>(
	function TablerBusinessplanIcon(props, ref) {
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
				<path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
				<path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
				<path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
				<path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
				<path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M5 15v1m0 -8v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBusinessplanIcon.displayName = "TablerBusinessplanIcon";
}
