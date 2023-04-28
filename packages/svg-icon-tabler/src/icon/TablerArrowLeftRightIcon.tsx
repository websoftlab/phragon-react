import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowLeftRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowLeftRightIcon = React.forwardRef<SVGSVGElement, TablerArrowLeftRightIconProps>(
	function TablerArrowLeftRightIcon(props, ref) {
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
				<path d="M17 13l4 -4l-4 -4" />
				<path d="M7 13l-4 -4l4 -4" />
				<path d="M12 14a5 5 0 0 1 5 -5h4" />
				<path d="M12 19v-5a5 5 0 0 0 -5 -5h-4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowLeftRightIcon.displayName = "TablerArrowLeftRightIcon";
}
