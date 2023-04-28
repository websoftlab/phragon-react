import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLanguageHiraganaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLanguageHiraganaIcon = React.forwardRef<SVGSVGElement, TablerLanguageHiraganaIconProps>(
	function TablerLanguageHiraganaIcon(props, ref) {
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
				<path d="M4 5h7" />
				<path d="M7 4c0 4.846 0 7 .5 8" />
				<path d="M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143" />
				<path d="M12 20l4 -9l4 9" />
				<path d="M19.1 18h-6.2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLanguageHiraganaIcon.displayName = "TablerLanguageHiraganaIcon";
}
