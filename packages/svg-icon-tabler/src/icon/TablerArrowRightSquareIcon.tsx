import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRightSquareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRightSquareIcon = React.forwardRef<SVGSVGElement, TablerArrowRightSquareIconProps>(
	function TablerArrowRightSquareIcon(props, ref) {
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
				<path d="M7 12l14 0" />
				<path d="M18 15l3 -3l-3 -3" />
				<path d="M3 10h4v4h-4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRightSquareIcon.displayName = "TablerArrowRightSquareIcon";
}
