import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayerPlayFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayerPlayFilledIcon = React.forwardRef<SVGSVGElement, TablerPlayerPlayFilledIconProps>(
	function TablerPlayerPlayFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayerPlayFilledIcon.displayName = "TablerPlayerPlayFilledIcon";
}
