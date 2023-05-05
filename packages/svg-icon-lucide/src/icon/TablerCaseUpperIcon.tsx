import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCaseUpperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCaseUpperIcon = React.forwardRef<SVGSVGElement, TablerCaseUpperIconProps>(
	function TablerCaseUpperIcon(props, ref) {
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
				<path d="M3 15 L7 7 L11 15" />
				<path d="M4 13 L10 13" />
				<path d="M15 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4V7z" />
				<path d="M15 11h4.5c1.1 0 2 .9 2 2s-.9 2-2 2H15v-4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCaseUpperIcon.displayName = "TablerCaseUpperIcon";
}
