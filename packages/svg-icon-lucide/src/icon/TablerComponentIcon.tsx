import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerComponentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerComponentIcon = React.forwardRef<SVGSVGElement, TablerComponentIconProps>(
	function TablerComponentIcon(props, ref) {
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
				<path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
				<path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
				<path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
				<path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerComponentIcon.displayName = "TablerComponentIcon";
}
