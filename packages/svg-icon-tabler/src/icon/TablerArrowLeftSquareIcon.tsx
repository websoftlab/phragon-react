import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowLeftSquareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowLeftSquareIcon = React.forwardRef<SVGSVGElement, TablerArrowLeftSquareIconProps>(
	function TablerArrowLeftSquareIcon(props, ref) {
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
				<path d="M17 12h-14" />
				<path d="M6 9l-3 3l3 3" />
				<path d="M21 14h-4v-4h4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowLeftSquareIcon.displayName = "TablerArrowLeftSquareIcon";
}
