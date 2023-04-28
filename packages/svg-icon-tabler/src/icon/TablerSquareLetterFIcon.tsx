import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareLetterFIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareLetterFIcon = React.forwardRef<SVGSVGElement, TablerSquareLetterFIconProps>(
	function TablerSquareLetterFIcon(props, ref) {
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
				<path d="M10 12h3" />
				<path d="M14 8h-4v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareLetterFIcon.displayName = "TablerSquareLetterFIcon";
}
