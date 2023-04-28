import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRecordMailOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRecordMailOffIcon = React.forwardRef<SVGSVGElement, TablerRecordMailOffIconProps>(
	function TablerRecordMailOffIcon(props, ref) {
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
				<path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M18.569 14.557a3 3 0 1 0 -4.113 -4.149" />
				<path d="M7 15h8" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRecordMailOffIcon.displayName = "TablerRecordMailOffIcon";
}
