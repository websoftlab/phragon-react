import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowMergeRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowMergeRightIcon = React.forwardRef<SVGSVGElement, TablerArrowMergeRightIconProps>(
	function TablerArrowMergeRightIcon(props, ref) {
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
				<path d="M16 8l-4 -4l-4 4" />
				<path d="M12 20v-16" />
				<path d="M18 18c-4 -1.333 -6 -4.667 -6 -10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowMergeRightIcon.displayName = "TablerArrowMergeRightIcon";
}
