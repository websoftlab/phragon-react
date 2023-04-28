import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrafficConeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrafficConeOffIcon = React.forwardRef<SVGSVGElement, TablerTrafficConeOffIconProps>(
	function TablerTrafficConeOffIcon(props, ref) {
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
				<path d="M4 20h16" />
				<path d="M9.4 10h.6m4 0h.6" />
				<path d="M7.8 15h7.2" />
				<path d="M6 20l3.5 -10.5" />
				<path d="M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrafficConeOffIcon.displayName = "TablerTrafficConeOffIcon";
}
