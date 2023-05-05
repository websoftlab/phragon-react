import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronDownIcon = React.forwardRef<SVGSVGElement, TablerChevronDownIconProps>(
	function TablerChevronDownIcon(props, ref) {
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
				<path d="M6 9 L12 15 L18 9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronDownIcon.displayName = "TablerChevronDownIcon";
}
