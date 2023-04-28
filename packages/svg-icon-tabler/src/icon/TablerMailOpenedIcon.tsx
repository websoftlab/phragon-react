import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailOpenedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailOpenedIcon = React.forwardRef<SVGSVGElement, TablerMailOpenedIconProps>(
	function TablerMailOpenedIcon(props, ref) {
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
				<path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
				<path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
				<path d="M3 19l6 -6" />
				<path d="M15 13l6 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMailOpenedIcon.displayName = "TablerMailOpenedIcon";
}
