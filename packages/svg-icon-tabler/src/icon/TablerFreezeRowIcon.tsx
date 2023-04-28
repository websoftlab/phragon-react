import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFreezeRowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFreezeRowIcon = React.forwardRef<SVGSVGElement, TablerFreezeRowIconProps>(
	function TablerFreezeRowIcon(props, ref) {
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
				<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
				<path d="M21 9h-18" />
				<path d="M15 3l-6 6" />
				<path d="M9.5 3l-6 6" />
				<path d="M20 3.5l-5.5 5.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFreezeRowIcon.displayName = "TablerFreezeRowIcon";
}
