import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLanguageKatakanaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLanguageKatakanaIcon = React.forwardRef<SVGSVGElement, TablerLanguageKatakanaIconProps>(
	function TablerLanguageKatakanaIcon(props, ref) {
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
				<path d="M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293" />
				<path d="M8 8c0 1.5 .5 3 -2 5" />
				<path d="M12 20l4 -9l4 9" />
				<path d="M19.1 18h-6.2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLanguageKatakanaIcon.displayName = "TablerLanguageKatakanaIcon";
}
