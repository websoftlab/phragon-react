import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterCaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterCaseIcon = React.forwardRef<SVGSVGElement, TablerLetterCaseIconProps>(
	function TablerLetterCaseIcon(props, ref) {
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
				<path d="M17.5 15.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
				<path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
				<path d="M3 13h7" />
				<path d="M21 12v7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLetterCaseIcon.displayName = "TablerLetterCaseIcon";
}
