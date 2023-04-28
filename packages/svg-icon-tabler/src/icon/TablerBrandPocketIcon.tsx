import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPocketIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPocketIcon = React.forwardRef<SVGSVGElement, TablerBrandPocketIconProps>(
	function TablerBrandPocketIcon(props, ref) {
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
				<path d="M5 4h14a2 2 0 0 1 2 2v6a9 9 0 0 1 -18 0v-6a2 2 0 0 1 2 -2" />
				<path d="M8 11l4 4l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandPocketIcon.displayName = "TablerBrandPocketIcon";
}
