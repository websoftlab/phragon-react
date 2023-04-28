import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLocationBrokenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLocationBrokenIcon = React.forwardRef<SVGSVGElement, TablerLocationBrokenIconProps>(
	function TablerLocationBrokenIcon(props, ref) {
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
				<path d="M12.896 19.792l-2.896 -5.792l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.487 9.657" />
				<path d="M21.5 21.5l-5 -5" />
				<path d="M16.5 21.5l5 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLocationBrokenIcon.displayName = "TablerLocationBrokenIcon";
}
