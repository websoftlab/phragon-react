import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMilkshakeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMilkshakeIcon = React.forwardRef<SVGSVGElement, TablerMilkshakeIconProps>(
	function TablerMilkshakeIcon(props, ref) {
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
				<path d="M17 10a5 5 0 0 0 -10 0" />
				<path d="M6 10m0 1a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
				<path d="M7 13l1.81 7.243a1 1 0 0 0 .97 .757h4.44a1 1 0 0 0 .97 -.757l1.81 -7.243" />
				<path d="M12 5v-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMilkshakeIcon.displayName = "TablerMilkshakeIcon";
}
