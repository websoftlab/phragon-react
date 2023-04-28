import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareArrowRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareArrowRightIcon = React.forwardRef<SVGSVGElement, TablerSquareArrowRightIconProps>(
	function TablerSquareArrowRightIcon(props, ref) {
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
				<path d="M12 16l4 -4l-4 -4" />
				<path d="M8 12h8" />
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareArrowRightIcon.displayName = "TablerSquareArrowRightIcon";
}
