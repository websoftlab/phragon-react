import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBadgeUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBadgeUpIcon = React.forwardRef<SVGSVGElement, TablerArrowBadgeUpIconProps>(
	function TablerArrowBadgeUpIcon(props, ref) {
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
				<path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBadgeUpIcon.displayName = "TablerArrowBadgeUpIcon";
}
