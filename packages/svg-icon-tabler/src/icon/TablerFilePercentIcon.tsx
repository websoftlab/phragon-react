import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFilePercentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFilePercentIcon = React.forwardRef<SVGSVGElement, TablerFilePercentIconProps>(
	function TablerFilePercentIcon(props, ref) {
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
				<path d="M10 17l4 -4" />
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
				<path d="M10 13h.01" />
				<path d="M14 17h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFilePercentIcon.displayName = "TablerFilePercentIcon";
}
