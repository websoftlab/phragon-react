import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBigRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBigRightIcon = React.forwardRef<SVGSVGElement, TablerArrowBigRightIconProps>(
	function TablerArrowBigRightIcon(props, ref) {
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
				<path d="M6 9h6V5l7 7-7 7v-4H6V9z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBigRightIcon.displayName = "TablerArrowBigRightIcon";
}
