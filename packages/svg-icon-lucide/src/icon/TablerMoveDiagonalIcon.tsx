import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoveDiagonalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoveDiagonalIcon = React.forwardRef<SVGSVGElement, TablerMoveDiagonalIconProps>(
	function TablerMoveDiagonalIcon(props, ref) {
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
				<path d="M13 5 L19 5 L19 11" />
				<path d="M11 19 L5 19 L5 13" />
				<path d="M19 5 L5 19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoveDiagonalIcon.displayName = "TablerMoveDiagonalIcon";
}
