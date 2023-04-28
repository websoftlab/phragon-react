import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSortAscendingNumbersIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSortAscendingNumbersIcon = React.forwardRef<SVGSVGElement, TablerSortAscendingNumbersIconProps>(
	function TablerSortAscendingNumbersIcon(props, ref) {
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
				<path d="M4 15l3 3l3 -3" />
				<path d="M7 6v12" />
				<path d="M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" />
				<path d="M17 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 16v3a2 2 0 0 1 -2 2h-1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSortAscendingNumbersIcon.displayName = "TablerSortAscendingNumbersIcon";
}
