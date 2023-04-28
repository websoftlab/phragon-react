import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronsLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronsLeftIcon = React.forwardRef<SVGSVGElement, TablerChevronsLeftIconProps>(
	function TablerChevronsLeftIcon(props, ref) {
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
				<path d="M11 7l-5 5l5 5" />
				<path d="M17 7l-5 5l5 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsLeftIcon.displayName = "TablerChevronsLeftIcon";
}
