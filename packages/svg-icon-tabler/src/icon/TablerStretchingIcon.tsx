import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStretchingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStretchingIcon = React.forwardRef<SVGSVGElement, TablerStretchingIconProps>(
	function TablerStretchingIcon(props, ref) {
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
				<path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M5 20l5 -.5l1 -2" />
				<path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStretchingIcon.displayName = "TablerStretchingIcon";
}
