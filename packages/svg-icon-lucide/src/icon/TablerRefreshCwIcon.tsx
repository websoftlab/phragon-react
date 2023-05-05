import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRefreshCwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRefreshCwIcon = React.forwardRef<SVGSVGElement, TablerRefreshCwIconProps>(
	function TablerRefreshCwIcon(props, ref) {
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
				<path d="M21 2v6h-6" />
				<path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
				<path d="M3 22v-6h6" />
				<path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRefreshCwIcon.displayName = "TablerRefreshCwIcon";
}
