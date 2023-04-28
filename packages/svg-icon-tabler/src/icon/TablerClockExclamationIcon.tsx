import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockExclamationIcon = React.forwardRef<SVGSVGElement, TablerClockExclamationIconProps>(
	function TablerClockExclamationIcon(props, ref) {
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
				<path d="M20.986 12.502a9 9 0 1 0 -5.973 7.98" />
				<path d="M12 7v5l3 3" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockExclamationIcon.displayName = "TablerClockExclamationIcon";
}
