import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRechargingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRechargingIcon = React.forwardRef<SVGSVGElement, TablerRechargingIconProps>(
	function TablerRechargingIcon(props, ref) {
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
				<path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
				<path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
				<path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
				<path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
				<path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
				<path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
				<path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
				<path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
				<path d="M12 8l-2 4h4l-2 4" />
				<path d="M12 21a9 9 0 0 0 0 -18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRechargingIcon.displayName = "TablerRechargingIcon";
}
