import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterCaseUpperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterCaseUpperIcon = React.forwardRef<SVGSVGElement, TablerLetterCaseUpperIconProps>(
	function TablerLetterCaseUpperIcon(props, ref) {
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
				<path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
				<path d="M3 13h7" />
				<path d="M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
				<path d="M14 13h7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLetterCaseUpperIcon.displayName = "TablerLetterCaseUpperIcon";
}
