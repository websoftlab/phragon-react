import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMobiledataOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMobiledataOffIcon = React.forwardRef<SVGSVGElement, TablerMobiledataOffIconProps>(
	function TablerMobiledataOffIcon(props, ref) {
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
				<path d="M16 12v-8" />
				<path d="M8 20v-8" />
				<path d="M13 7l3 -3l3 3" />
				<path d="M5 17l3 3l3 -3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMobiledataOffIcon.displayName = "TablerMobiledataOffIcon";
}
