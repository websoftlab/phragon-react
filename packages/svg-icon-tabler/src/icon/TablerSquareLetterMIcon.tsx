import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareLetterMIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareLetterMIcon = React.forwardRef<SVGSVGElement, TablerSquareLetterMIconProps>(
	function TablerSquareLetterMIcon(props, ref) {
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
				<path d="M9 16v-8l3 5l3 -5v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareLetterMIcon.displayName = "TablerSquareLetterMIcon";
}
