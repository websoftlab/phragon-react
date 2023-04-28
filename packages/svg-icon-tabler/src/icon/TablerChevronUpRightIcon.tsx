import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronUpRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronUpRightIcon = React.forwardRef<SVGSVGElement, TablerChevronUpRightIconProps>(
	function TablerChevronUpRightIcon(props, ref) {
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
				<path d="M8 8h8v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronUpRightIcon.displayName = "TablerChevronUpRightIcon";
}
