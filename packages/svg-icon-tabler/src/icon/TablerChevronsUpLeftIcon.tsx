import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronsUpLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronsUpLeftIcon = React.forwardRef<SVGSVGElement, TablerChevronsUpLeftIconProps>(
	function TablerChevronsUpLeftIcon(props, ref) {
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
				<path d="M7 15v-8h8" />
				<path d="M11 19v-8h8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsUpLeftIcon.displayName = "TablerChevronsUpLeftIcon";
}
