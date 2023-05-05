import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMilestoneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMilestoneIcon = React.forwardRef<SVGSVGElement, TablerMilestoneIconProps>(
	function TablerMilestoneIcon(props, ref) {
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
				<path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
				<path d="M12 13v8" />
				<path d="M12 3v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMilestoneIcon.displayName = "TablerMilestoneIcon";
}
