import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowLeftBarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowLeftBarIcon = React.forwardRef<SVGSVGElement, TablerArrowLeftBarIconProps>(
	function TablerArrowLeftBarIcon(props, ref) {
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
				<path d="M21 12h-18" />
				<path d="M6 9l-3 3l3 3" />
				<path d="M21 9v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowLeftBarIcon.displayName = "TablerArrowLeftBarIcon";
}
