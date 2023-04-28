import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeCancelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeCancelIcon = React.forwardRef<SVGSVGElement, TablerHomeCancelIconProps>(
	function TablerHomeCancelIcon(props, ref) {
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
				<path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M17 21l4 -4" />
				<path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2c.58 0 1.103 .247 1.468 .642" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeCancelIcon.displayName = "TablerHomeCancelIcon";
}
