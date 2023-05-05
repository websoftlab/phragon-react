import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronRightIcon = React.forwardRef<SVGSVGElement, TablerChevronRightIconProps>(
	function TablerChevronRightIcon(props, ref) {
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
				<path d="M9 18 L15 12 L9 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronRightIcon.displayName = "TablerChevronRightIcon";
}
