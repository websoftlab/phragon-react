import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldCodeIcon = React.forwardRef<SVGSVGElement, TablerWorldCodeIconProps>(
	function TablerWorldCodeIcon(props, ref) {
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
				<path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h9.9" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" />
				<path d="M20 21l2 -2l-2 -2" />
				<path d="M17 17l-2 2l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldCodeIcon.displayName = "TablerWorldCodeIcon";
}
