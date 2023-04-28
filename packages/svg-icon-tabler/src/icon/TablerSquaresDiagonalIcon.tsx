import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquaresDiagonalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquaresDiagonalIcon = React.forwardRef<SVGSVGElement, TablerSquaresDiagonalIconProps>(
	function TablerSquaresDiagonalIcon(props, ref) {
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
				<path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
				<path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
				<path d="M8.586 19.414l10.827 -10.827" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquaresDiagonalIcon.displayName = "TablerSquaresDiagonalIcon";
}
