import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerComponentsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerComponentsIcon = React.forwardRef<SVGSVGElement, TablerComponentsIconProps>(
	function TablerComponentsIcon(props, ref) {
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
				<path d="M3 12l3 3l3 -3l-3 -3z" />
				<path d="M15 12l3 3l3 -3l-3 -3z" />
				<path d="M9 6l3 3l3 -3l-3 -3z" />
				<path d="M9 18l3 3l3 -3l-3 -3z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerComponentsIcon.displayName = "TablerComponentsIcon";
}
