import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileTextAiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileTextAiIcon = React.forwardRef<SVGSVGElement, TablerFileTextAiIconProps>(
	function TablerFileTextAiIcon(props, ref) {
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
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v3.5" />
				<path d="M9 9h1" />
				<path d="M9 13h2.5" />
				<path d="M9 17h1" />
				<path d="M14 21v-4a2 2 0 1 1 4 0v4" />
				<path d="M14 19h4" />
				<path d="M21 15v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileTextAiIcon.displayName = "TablerFileTextAiIcon";
}
