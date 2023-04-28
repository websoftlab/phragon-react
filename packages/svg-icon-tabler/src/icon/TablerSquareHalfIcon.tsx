import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareHalfIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareHalfIcon = React.forwardRef<SVGSVGElement, TablerSquareHalfIconProps>(
	function TablerSquareHalfIcon(props, ref) {
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
				<path d="M12 4v16" />
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M12 13l7.5 -7.5" />
				<path d="M12 18l8 -8" />
				<path d="M15 20l5 -5" />
				<path d="M12 8l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareHalfIcon.displayName = "TablerSquareHalfIcon";
}
