import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceMobileCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceMobileCodeIcon = React.forwardRef<SVGSVGElement, TablerDeviceMobileCodeIconProps>(
	function TablerDeviceMobileCodeIcon(props, ref) {
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
				<path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
				<path d="M20 21l2 -2l-2 -2" />
				<path d="M17 17l-2 2l2 2" />
				<path d="M11 4h2" />
				<path d="M12 17v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceMobileCodeIcon.displayName = "TablerDeviceMobileCodeIcon";
}
