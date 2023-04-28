import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronDownRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronDownRightIcon = React.forwardRef<SVGSVGElement, TablerChevronDownRightIconProps>(
	function TablerChevronDownRightIcon(props, ref) {
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
				<path d="M16 8v8h-8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronDownRightIcon.displayName = "TablerChevronDownRightIcon";
}
