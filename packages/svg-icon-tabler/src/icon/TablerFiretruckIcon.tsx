import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFiretruckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFiretruckIcon = React.forwardRef<SVGSVGElement, TablerFiretruckIconProps>(
	function TablerFiretruckIcon(props, ref) {
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
				<path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" />
				<path d="M12 18v-11h3" />
				<path d="M3 17l0 -5l9 0" />
				<path d="M3 9l18 -6" />
				<path d="M6 12l0 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFiretruckIcon.displayName = "TablerFiretruckIcon";
}
