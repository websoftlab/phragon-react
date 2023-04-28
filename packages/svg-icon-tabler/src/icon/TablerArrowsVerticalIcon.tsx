import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsVerticalIcon = React.forwardRef<SVGSVGElement, TablerArrowsVerticalIconProps>(
	function TablerArrowsVerticalIcon(props, ref) {
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
				<path d="M8 7l4 -4l4 4" />
				<path d="M8 17l4 4l4 -4" />
				<path d="M12 3l0 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsVerticalIcon.displayName = "TablerArrowsVerticalIcon";
}
