import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSortAscendingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSortAscendingIcon = React.forwardRef<SVGSVGElement, TablerSortAscendingIconProps>(
	function TablerSortAscendingIcon(props, ref) {
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
				<path d="M4 6l7 0" />
				<path d="M4 12l7 0" />
				<path d="M4 18l9 0" />
				<path d="M15 9l3 -3l3 3" />
				<path d="M18 6l0 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSortAscendingIcon.displayName = "TablerSortAscendingIcon";
}
