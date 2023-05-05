import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronLastIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronLastIcon = React.forwardRef<SVGSVGElement, TablerChevronLastIconProps>(
	function TablerChevronLastIcon(props, ref) {
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
				<path d="M7 18 L13 12 L7 6" />
				<path d="M17 6v12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronLastIcon.displayName = "TablerChevronLastIcon";
}
