import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRefreshCcwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRefreshCcwIcon = React.forwardRef<SVGSVGElement, TablerRefreshCcwIconProps>(
	function TablerRefreshCcwIcon(props, ref) {
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
				<path d="M3 2v6h6" />
				<path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
				<path d="M21 22v-6h-6" />
				<path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRefreshCcwIcon.displayName = "TablerRefreshCcwIcon";
}
