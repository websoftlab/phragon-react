import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareLetterAIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareLetterAIcon = React.forwardRef<SVGSVGElement, TablerSquareLetterAIconProps>(
	function TablerSquareLetterAIcon(props, ref) {
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
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M10 16v-6a2 2 0 1 1 4 0v6" />
				<path d="M10 13h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareLetterAIcon.displayName = "TablerSquareLetterAIcon";
}
