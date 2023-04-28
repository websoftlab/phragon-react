import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxAlignRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxAlignRightIcon = React.forwardRef<SVGSVGElement, TablerBoxAlignRightIconProps>(
	function TablerBoxAlignRightIcon(props, ref) {
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
				<path d="M14.248 19.753v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" />
				<path d="M9.248 19.753h.01" />
				<path d="M4.247 19.753h.011" />
				<path d="M4.247 14.752h.011" />
				<path d="M4.247 8.752h.011" />
				<path d="M4.247 3.752h.011" />
				<path d="M9.248 3.752h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBoxAlignRightIcon.displayName = "TablerBoxAlignRightIcon";
}
