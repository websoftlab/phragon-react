import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBigDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBigDownIcon = React.forwardRef<SVGSVGElement, TablerArrowBigDownIconProps>(
	function TablerArrowBigDownIcon(props, ref) {
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
				<path d="M15 6v6h4l-7 7-7-7h4V6h6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBigDownIcon.displayName = "TablerArrowBigDownIcon";
}
