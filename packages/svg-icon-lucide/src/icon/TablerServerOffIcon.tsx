import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerServerOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerServerOffIcon = React.forwardRef<SVGSVGElement, TablerServerOffIconProps>(
	function TablerServerOffIcon(props, ref) {
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
				<path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
				<path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
				<path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
				<path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
				<path d="M6 18h.01" />
				<path d="m2 2 20 20" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerServerOffIcon.displayName = "TablerServerOffIcon";
}
