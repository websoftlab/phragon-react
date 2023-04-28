import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextDirectionLtrIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextDirectionLtrIcon = React.forwardRef<SVGSVGElement, TablerTextDirectionLtrIconProps>(
	function TablerTextDirectionLtrIcon(props, ref) {
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
				<path d="M5 19h14" />
				<path d="M17 21l2 -2l-2 -2" />
				<path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" />
				<path d="M14 15v-11" />
				<path d="M10 15v-11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextDirectionLtrIcon.displayName = "TablerTextDirectionLtrIcon";
}
