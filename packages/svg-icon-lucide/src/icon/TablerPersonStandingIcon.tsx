import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPersonStandingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPersonStandingIcon = React.forwardRef<SVGSVGElement, TablerPersonStandingIconProps>(
	function TablerPersonStandingIcon(props, ref) {
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
				<path d="M13 5 A1 1 0 0 1 12 6 A1 1 0 0 1 11 5 A1 1 0 0 1 13 5" />
				<path d="m9 20 3-6 3 6" />
				<path d="m6 8 6 2 6-2" />
				<path d="M12 10v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPersonStandingIcon.displayName = "TablerPersonStandingIcon";
}
