import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailForwardIcon = React.forwardRef<SVGSVGElement, TablerMailForwardIconProps>(
	function TablerMailForwardIcon(props, ref) {
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
				<path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
				<path d="M3 6l9 6l9 -6" />
				<path d="M15 18h6" />
				<path d="M18 15l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMailForwardIcon.displayName = "TablerMailForwardIcon";
}
