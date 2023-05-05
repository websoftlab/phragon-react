import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronUpIcon = React.forwardRef<SVGSVGElement, TablerChevronUpIconProps>(
	function TablerChevronUpIcon(props, ref) {
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
				<path d="M18 15 L12 9 L6 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronUpIcon.displayName = "TablerChevronUpIcon";
}
